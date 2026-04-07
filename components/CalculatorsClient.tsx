"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLocale } from "@/lib/i18n";

type Gender = "male" | "female";
type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "veryActive";
type MacroGoal = "fat loss" | "maintenance" | "muscle gain";
type TrainingGoal = "fat loss" | "muscle gain" | "general fitness" | "athletic performance";
type FitnessLevel = "beginner" | "intermediate" | "advanced";

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const trainingRecommendations: Record<TrainingGoal, Record<FitnessLevel, string>> = {
  "fat loss": {
    beginner: "3 sessions/week",
    intermediate: "4 sessions/week",
    advanced: "5 sessions/week",
  },
  "muscle gain": {
    beginner: "3 to 4 sessions/week",
    intermediate: "4 to 5 sessions/week",
    advanced: "5 to 6 sessions/week",
  },
  "general fitness": {
    beginner: "2 to 3 sessions/week",
    intermediate: "3 to 4 sessions/week",
    advanced: "4 sessions/week",
  },
  "athletic performance": {
    beginner: "3 sessions/week",
    intermediate: "4 to 5 sessions/week",
    advanced: "5 to 6 sessions/week",
  },
};

export default function CalculatorsClient() {
  const { t, isArabic } = useLocale();
  const cal = t.calculators;

  const [bmiInputs, setBmiInputs] = useState({ weight: "", height: "" });
  const [bmiResult, setBmiResult] = useState<{ bmi: string; category: string } | null>(null);
  const [bmiError, setBmiError] = useState("");

  const [calorieInputs, setCalorieInputs] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male" as Gender,
    activity: "moderate" as ActivityLevel,
  });
  const [calorieResult, setCalorieResult] = useState<number | null>(null);
  const [calorieError, setCalorieError] = useState("");

  const [waterWeight, setWaterWeight] = useState("");
  const [waterResult, setWaterResult] = useState<string | null>(null);
  const [waterError, setWaterError] = useState("");

  const [macroInputs, setMacroInputs] = useState({ tdee: "", goal: "maintenance" as MacroGoal });
  const [macroResult, setMacroResult] = useState<{
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  } | null>(null);
  const [macroError, setMacroError] = useState("");

  const [frequencyInputs, setFrequencyInputs] = useState({
    goal: "general fitness" as TrainingGoal,
    level: "beginner" as FitnessLevel,
  });
  const [frequencyResult, setFrequencyResult] = useState<string | null>(null);

  const parsePositive = (value: string) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  };

  const calculateBmi = () => {
    const weight = parsePositive(bmiInputs.weight);
    const heightCm = parsePositive(bmiInputs.height);

    if (!weight || !heightCm) {
      setBmiError(cal.bmi.error);
      setBmiResult(null);
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const categoryKey =
      bmi < 18.5 ? "underweight" : bmi < 25 ? "normal" : bmi < 30 ? "overweight" : "obese";
    const category = cal.bmi.categories[categoryKey as keyof typeof cal.bmi.categories];

    setBmiError("");
    setBmiResult({ bmi: bmi.toFixed(1), category });
  };

  const calculateCalories = () => {
    const weight = parsePositive(calorieInputs.weight);
    const height = parsePositive(calorieInputs.height);
    const age = parsePositive(calorieInputs.age);

    if (!weight || !height || !age) {
      setCalorieError(cal.calories.error);
      setCalorieResult(null);
      return;
    }

    const bmr =
      calorieInputs.gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    setCalorieError("");
    setCalorieResult(Math.round(bmr * activityMultipliers[calorieInputs.activity]));
  };

  const calculateWater = () => {
    const weight = parsePositive(waterWeight);

    if (!weight) {
      setWaterError(cal.water.error);
      setWaterResult(null);
      return;
    }

    setWaterError("");
    setWaterResult((weight * 0.035).toFixed(1));
  };

  const calculateMacros = () => {
    const tdee = parsePositive(macroInputs.tdee);

    if (!tdee) {
      setMacroError(cal.macros.error);
      setMacroResult(null);
      return;
    }

    const adjustedCalories =
      macroInputs.goal === "fat loss" ? tdee - 400 : macroInputs.goal === "muscle gain" ? tdee + 250 : tdee;

    const proteinRatio = macroInputs.goal === "muscle gain" ? 0.3 : 0.32;
    const fatRatio = macroInputs.goal === "fat loss" ? 0.28 : 0.25;
    const protein = Math.round((adjustedCalories * proteinRatio) / 4);
    const fats = Math.round((adjustedCalories * fatRatio) / 9);
    const carbs = Math.round((adjustedCalories - protein * 4 - fats * 9) / 4);

    setMacroError("");
    setMacroResult({
      calories: adjustedCalories,
      protein,
      carbs,
      fats,
    });
  };

  const calculateFrequency = () => {
    setFrequencyResult(trainingRecommendations[frequencyInputs.goal][frequencyInputs.level]);
  };

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <SectionHeader label={cal.label} title={cal.title} description={cal.description} />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <CalculatorCard title={cal.bmi.title} description={cal.bmi.description}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label={cal.bmi.weight} value={bmiInputs.weight} onChange={(value) => setBmiInputs((current) => ({ ...current, weight: value }))} />
            <Input label={cal.bmi.height} value={bmiInputs.height} onChange={(value) => setBmiInputs((current) => ({ ...current, height: value }))} />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={calculateBmi} ariaLabel="Calculate BMI">{cal.bmi.calculate}</Button>
            <Button variant="secondary" onClick={() => { setBmiInputs({ weight: "", height: "" }); setBmiResult(null); setBmiError(""); }} ariaLabel="Reset BMI">
              {cal.bmi.reset}
            </Button>
          </div>
          <ResultBlock error={bmiError}>
            {bmiResult ? `${cal.bmi.result} ${bmiResult.bmi} • ${bmiResult.category}` : cal.bmi.placeholder}
          </ResultBlock>
        </CalculatorCard>

        <CalculatorCard title={cal.calories.title} description={cal.calories.description}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label={cal.calories.weight} value={calorieInputs.weight} onChange={(value) => setCalorieInputs((current) => ({ ...current, weight: value }))} />
            <Input label={cal.calories.height} value={calorieInputs.height} onChange={(value) => setCalorieInputs((current) => ({ ...current, height: value }))} />
            <Input label={cal.calories.age} value={calorieInputs.age} onChange={(value) => setCalorieInputs((current) => ({ ...current, age: value }))} />
            <Select label={cal.calories.gender} value={calorieInputs.gender} onChange={(value) => setCalorieInputs((current) => ({ ...current, gender: value as Gender }))} options={cal.calories.genderOptions} />
            <Select label={cal.calories.activity} value={calorieInputs.activity} onChange={(value) => setCalorieInputs((current) => ({ ...current, activity: value as ActivityLevel }))} options={cal.calories.activityOptions} />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={calculateCalories} ariaLabel="Calculate calories">{cal.calories.calculate}</Button>
            <Button variant="secondary" onClick={() => { setCalorieInputs({ weight: "", height: "", age: "", gender: "male", activity: "moderate" }); setCalorieResult(null); setCalorieError(""); }} ariaLabel="Reset calories">
              {cal.calories.reset}
            </Button>
          </div>
          <ResultBlock error={calorieError}>
            {calorieResult ? `${calorieResult} ${cal.calories.resultSuffix}` : cal.calories.placeholder}
          </ResultBlock>
        </CalculatorCard>

        <CalculatorCard title={cal.water.title} description={cal.water.description}>
          <Input label={cal.water.weight} value={waterWeight} onChange={setWaterWeight} />
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={calculateWater} ariaLabel="Calculate water">{cal.water.calculate}</Button>
            <Button variant="secondary" onClick={() => { setWaterWeight(""); setWaterResult(null); setWaterError(""); }} ariaLabel="Reset water">
              {cal.water.reset}
            </Button>
          </div>
          <ResultBlock error={waterError}>
            {waterResult ? `${waterResult} ${cal.water.resultSuffix}` : cal.water.placeholder}
          </ResultBlock>
        </CalculatorCard>

        <CalculatorCard title={cal.macros.title} description={cal.macros.description}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label={cal.macros.tdee} value={macroInputs.tdee} onChange={(value) => setMacroInputs((current) => ({ ...current, tdee: value }))} />
            <Select label={cal.macros.goal} value={macroInputs.goal} onChange={(value) => setMacroInputs((current) => ({ ...current, goal: value as MacroGoal }))} options={cal.macros.goalOptions} />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={calculateMacros} ariaLabel="Calculate macros">{cal.macros.calculate}</Button>
            <Button variant="secondary" onClick={() => { setMacroInputs({ tdee: "", goal: "maintenance" }); setMacroResult(null); setMacroError(""); }} ariaLabel="Reset macros">
              {cal.macros.reset}
            </Button>
          </div>
          <ResultBlock error={macroError}>
            {macroResult
              ? `${macroResult.calories} kcal • ${cal.macros.protein} ${macroResult.protein}g • ${cal.macros.carbs} ${macroResult.carbs}g • ${cal.macros.fats} ${macroResult.fats}g`
              : cal.macros.placeholder}
          </ResultBlock>
        </CalculatorCard>

        <CalculatorCard title={cal.frequency.title} description={cal.frequency.description}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select label={cal.frequency.goal} value={frequencyInputs.goal} onChange={(value) => setFrequencyInputs((current) => ({ ...current, goal: value as TrainingGoal }))} options={cal.frequency.goalOptions} />
            <Select label={cal.frequency.level} value={frequencyInputs.level} onChange={(value) => setFrequencyInputs((current) => ({ ...current, level: value as FitnessLevel }))} options={cal.frequency.levelOptions} />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={calculateFrequency} ariaLabel="Calculate frequency">{cal.frequency.calculate}</Button>
            <Button variant="secondary" onClick={() => { setFrequencyInputs({ goal: "general fitness", level: "beginner" }); setFrequencyResult(null); }} ariaLabel="Reset frequency">
              {cal.frequency.reset}
            </Button>
          </div>
          <ResultBlock>
            {frequencyResult ? `${frequencyResult} ${cal.frequency.resultSuffix}` : cal.frequency.placeholder}
          </ResultBlock>
        </CalculatorCard>
      </div>
    </section>
  );
}

function CalculatorCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-nox-grey/60 p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-sm text-white/75">{description}</p>
      <div className="mt-5">{children}</div>
    </article>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="space-y-2 text-sm text-white/85">
      <span>{label}</span>
      <input
        type="number"
        min="0"
        inputMode="decimal"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-xl border border-white/15 bg-black/45 px-3 text-white outline-none transition-colors focus:border-nox-red"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: ReadonlyArray<{ value: string; label: string }>;
}) {
  return (
    <label className="space-y-2 text-sm text-white/85">
      <span>{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-xl border border-white/15 bg-black/45 px-3 text-white outline-none transition-colors focus:border-nox-red"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ResultBlock({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="mt-5 rounded-2xl border border-nox-red/25 bg-black/40 p-4 text-sm">
      {error ? <p className="text-nox-red">{error}</p> : <p className="text-white/80">{children}</p>}
    </div>
  );
}
