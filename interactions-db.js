const DB = [
  // ── METFORMIN ──
  { drug:"Metformin", drug_aliases:["glucophage","biguanide","fortamet","glumetza"],
    nutrient:"Vitamin B12", nutrient_aliases:["b12","cobalamin","cyanocobalamin","methylcobalamin"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Metformin interferes with calcium-dependent membrane binding of the intrinsic factor–B12 complex in the terminal ileum, impairing B12 absorption.",
    effect:"B12 deficiency in 10–30% of long-term users; can cause peripheral neuropathy and megaloblastic anemia.",
    management:"Check B12 annually in long-term users. Supplement with crystalline B12 (sublingual or IM bypasses the absorption defect). Calcium supplementation may partially reverse this interaction.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Metformin", drug_aliases:["glucophage","biguanide","fortamet","glumetza"],
    nutrient:"Folate", nutrient_aliases:["folic acid","folacin","b9","vitamin b9"],
    severity:"minor", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Metformin may reduce folate absorption via altered intestinal pH and mild mucosal changes.",
    effect:"Mild folate reduction reported; evidence less consistent than B12 depletion.",
    management:"Ensure adequate dietary folate; consider supplementation in patients with additional risk factors (pregnancy, poor diet).",
    evidence:"possible", onset:"chronic", timing_note:null },

  // ── WARFARIN ──
  { drug:"Warfarin", drug_aliases:["coumadin","jantoven","anticoagulant"],
    nutrient:"Vitamin K", nutrient_aliases:["phylloquinone","menaquinone","k1","k2","vit k"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Warfarin inhibits vitamin K epoxide reductase (VKORC1), blocking recycling of vitamin K needed for synthesis of clotting factors II, VII, IX, X. Dietary vitamin K directly antagonizes this effect.",
    effect:"Increased vitamin K intake raises INR resistance (subtherapeutic anticoagulation); abrupt decreases raise INR (bleeding risk).",
    management:"Maintain consistent vitamin K intake rather than eliminating it. Avoid drastic changes in green leafy vegetable consumption. Adjust warfarin dose to diet, not vice versa.",
    evidence:"established", onset:"acute", timing_note:"Effect apparent within 24–72 hours of dietary change" },

  { drug:"Warfarin", drug_aliases:["coumadin","jantoven"],
    nutrient:"Vitamin E", nutrient_aliases:["tocopherol","alpha-tocopherol","vit e"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"High-dose vitamin E (>400 IU/day) inhibits vitamin K-dependent carboxylation of clotting factors and inhibits platelet aggregation.",
    effect:"Enhanced anticoagulant effect; elevated INR; increased bleeding risk.",
    management:"Limit vitamin E to <200 IU/day during warfarin therapy. Monitor INR if patient uses vitamin E supplements.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"Warfarin", drug_aliases:["coumadin","jantoven"],
    nutrient:"Coenzyme Q10", nutrient_aliases:["coq10","ubiquinol","ubiquinone"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"CoQ10 has structural similarity to vitamin K2 (menaquinone) and may exert mild vitamin K-like activity on clotting factor synthesis.",
    effect:"May reduce warfarin efficacy; decreased INR reported in case series.",
    management:"Monitor INR if starting or stopping CoQ10 supplementation; adjust warfarin dose as needed.",
    evidence:"possible", onset:"chronic", timing_note:null },

  { drug:"Warfarin", drug_aliases:["coumadin","jantoven"],
    nutrient:"Omega-3 / Fish Oil", nutrient_aliases:["fish oil","epa","dha","omega 3","omega-3 fatty acids"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"High-dose omega-3 fatty acids inhibit platelet aggregation via thromboxane A2 suppression and may modestly inhibit clotting factor synthesis.",
    effect:"Enhanced anticoagulant and antiplatelet effect at doses >3g/day EPA+DHA.",
    management:"Monitor INR if patient uses fish oil supplements >1g/day. Doses <1g/day are generally safe.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"Warfarin", drug_aliases:["coumadin","jantoven"],
    nutrient:"St. John's Wort", nutrient_aliases:["hypericum perforatum","stjohns wort","st johns wort"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"St. John's Wort induces CYP2C9 (warfarin's primary metabolic enzyme) and P-glycoprotein, increasing warfarin clearance.",
    effect:"Significantly reduced warfarin plasma levels; subtherapeutic anticoagulation; thromboembolism risk.",
    management:"AVOID COMBINATION. If patient must use, monitor INR very closely and expect major dose increases needed.",
    evidence:"established", onset:"chronic", timing_note:"Effect builds over 2–4 weeks of St. John's Wort use" },

  // ── LEVOTHYROXINE ──
  { drug:"Levothyroxine", drug_aliases:["synthroid","eltroxin","euthyrox","t4","thyroxine"],
    nutrient:"Calcium", nutrient_aliases:["calcium carbonate","calcium citrate","ca","cal"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Calcium ions form insoluble complexes with levothyroxine in the GI tract, reducing absorption by up to 40%.",
    effect:"Reduced levothyroxine bioavailability; hypothyroidism may worsen or be difficult to control.",
    management:"Take levothyroxine on an empty stomach (30–60 min before breakfast). Separate calcium by at least 4 hours.",
    evidence:"established", onset:"acute", timing_note:"Separate by minimum 4 hours" },

  { drug:"Levothyroxine", drug_aliases:["synthroid","eltroxin","euthyrox","t4","thyroxine"],
    nutrient:"Iron", nutrient_aliases:["ferrous sulfate","ferrous gluconate","iron supplement","fe","ferritin"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Iron forms insoluble ferric-levothyroxine chelates in the GI tract.",
    effect:"Reduced levothyroxine absorption and bioavailability; difficult thyroid control.",
    management:"Separate levothyroxine and iron by at least 4 hours. Take levothyroxine first thing in the morning.",
    evidence:"established", onset:"acute", timing_note:"Separate by minimum 4 hours" },

  { drug:"Levothyroxine", drug_aliases:["synthroid","eltroxin","euthyrox","t4","thyroxine"],
    nutrient:"Magnesium", nutrient_aliases:["magnesium","mg","magnesium oxide","magnesium citrate","magnesium glycinate"],
    severity:"minor", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Magnesium may form complexes with levothyroxine, reducing absorption.",
    effect:"Mild reduction in levothyroxine bioavailability.",
    management:"Separate magnesium supplements by at least 4 hours from levothyroxine.",
    evidence:"possible", onset:"acute", timing_note:"Separate by 4 hours" },

  // ── PROTON PUMP INHIBITORS ──
  { drug:"Omeprazole / PPIs", drug_aliases:["omeprazole","esomeprazole","pantoprazole","lansoprazole","rabeprazole","nexium","prilosec","protonix","prevacid","ppi"],
    nutrient:"Vitamin B12", nutrient_aliases:["b12","cobalamin","cyanocobalamin","methylcobalamin"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Gastric acid is required for pepsin-mediated release of B12 from food proteins. PPIs suppress acid production, impairing this step. Crystalline B12 (supplements) is not affected.",
    effect:"B12 deficiency with long-term use (>2 years), especially in elderly. Risk of neuropathy and anemia.",
    management:"Monitor B12 in patients on long-term PPI therapy. Supplement with crystalline B12 (sublingual or oral supplement) if levels low.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Omeprazole / PPIs", drug_aliases:["omeprazole","esomeprazole","pantoprazole","lansoprazole","rabeprazole","nexium","prilosec","protonix","prevacid","ppi"],
    nutrient:"Magnesium", nutrient_aliases:["magnesium","mg","magnesium oxide"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Mechanism incompletely understood; likely involves inhibition of intestinal TRPM6/7 transient receptor potential channels responsible for active magnesium absorption.",
    effect:"Hypomagnesemia (sometimes severe) with long-term use; can cause tetany, seizures, cardiac arrhythmias.",
    management:"Monitor serum magnesium in long-term PPI users (>1 year). Supplement if deficient. Hypomagnesemia may not correct until PPI is stopped.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Omeprazole / PPIs", drug_aliases:["omeprazole","esomeprazole","pantoprazole","lansoprazole","rabeprazole","nexium","prilosec","protonix","prevacid","ppi"],
    nutrient:"Calcium", nutrient_aliases:["calcium","ca","calcium carbonate"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Calcium carbonate dissolution requires gastric acid. PPIs reduce acid, impairing calcium carbonate absorption. Calcium citrate absorption is acid-independent.",
    effect:"Reduced calcium absorption from carbonate form; associated with increased fracture risk with long-term use.",
    management:"Switch to calcium citrate supplements (acid-independent absorption). Ensure adequate vitamin D. Monitor bone density in long-term users.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Omeprazole / PPIs", drug_aliases:["omeprazole","esomeprazole","pantoprazole","lansoprazole","rabeprazole","nexium","prilosec","protonix","prevacid","ppi"],
    nutrient:"Iron", nutrient_aliases:["iron","fe","ferrous sulfate","ferric"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Gastric acid converts dietary ferric (Fe3+) to ferrous (Fe2+) iron, which is better absorbed. PPIs impair this reduction step.",
    effect:"Reduced non-heme iron absorption; may cause or worsen iron deficiency anemia.",
    management:"Monitor iron status (ferritin, CBC) in long-term PPI users. Use ferrous forms of supplements; consider separating from PPI dose.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Omeprazole / PPIs", drug_aliases:["omeprazole","esomeprazole","pantoprazole","lansoprazole","rabeprazole","nexium","prilosec","protonix","prevacid","ppi"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn","zinc picolinate","zinc gluconate","zinc sulfate"],
    severity:"minor", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Reduced gastric acid may impair ionization and absorption of dietary zinc.",
    effect:"Mild zinc depletion with long-term use; may contribute to immune dysfunction, taste disturbance.",
    management:"Monitor zinc in long-term PPI users. Consider supplementation if deficient.",
    evidence:"possible", onset:"chronic", timing_note:null },

  // ── STATINS ──
  { drug:"Statins", drug_aliases:["atorvastatin","simvastatin","rosuvastatin","lovastatin","pravastatin","fluvastatin","pitavastatin","lipitor","zocor","crestor","mevacor"],
    nutrient:"Coenzyme Q10", nutrient_aliases:["coq10","ubiquinol","ubiquinone","q10"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"HMG-CoA reductase inhibition blocks the mevalonate pathway, which is required for synthesis of both cholesterol AND CoQ10 (ubiquinone). All statins deplete endogenous CoQ10.",
    effect:"Reduced CoQ10 in plasma and muscle; may contribute to statin-induced myopathy, fatigue, and muscle weakness.",
    management:"Consider CoQ10 supplementation (100–200mg/day) in patients with statin-related myalgia or fatigue. Evidence for routine supplementation is mixed but harm is low.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Statins", drug_aliases:["atorvastatin","simvastatin","rosuvastatin","lovastatin","pravastatin","lipitor","zocor","crestor"],
    nutrient:"Grapefruit", nutrient_aliases:["grapefruit","grapefruit juice","pomelo","seville orange"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"Grapefruit furanocoumarins (bergamottin, DHB) irreversibly inhibit intestinal CYP3A4, dramatically increasing bioavailability of simvastatin and lovastatin (up to 13-fold), and moderately atorvastatin. Rosuvastatin and pravastatin are largely unaffected.",
    effect:"Markedly elevated statin plasma levels; increased risk of myopathy and rhabdomyolysis.",
    management:"AVOID grapefruit and grapefruit juice with simvastatin and lovastatin. Limit with atorvastatin. Switch to rosuvastatin or pravastatin if grapefruit consumption cannot be avoided. Effect lasts 24–72 hours.",
    evidence:"established", onset:"acute", timing_note:"Effect persists 24–72 hours after grapefruit consumption" },

  { drug:"Statins", drug_aliases:["atorvastatin","simvastatin","rosuvastatin","lovastatin","pravastatin","lipitor","zocor","crestor"],
    nutrient:"Red Yeast Rice", nutrient_aliases:["red yeast rice","monascus purpureus"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Red yeast rice contains monacolin K, which is chemically identical to lovastatin. Combined with prescription statins, it provides additive HMG-CoA reductase inhibition and CoQ10 depletion.",
    effect:"Risk of additive myopathy, rhabdomyolysis, and liver toxicity.",
    management:"AVOID red yeast rice with statin therapy. Patients taking red yeast rice as 'natural' alternative should be counseled on this risk.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Statins", drug_aliases:["atorvastatin","simvastatin","rosuvastatin","lovastatin","pravastatin","lipitor","zocor","crestor"],
    nutrient:"Niacin (high dose)", nutrient_aliases:["niacin","nicotinic acid","b3","vitamin b3","niaspan"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Mechanism unclear; possibly involves impaired CoQ10 availability or direct myotoxic interaction.",
    effect:"Increased risk of myopathy and rhabdomyolysis with high-dose niacin (>1g/day) combined with statins.",
    management:"Avoid high-dose niacin with statins unless under specialist supervision. Monitor CK and symptoms of myopathy.",
    evidence:"established", onset:"chronic", timing_note:null },

  // ── ACE INHIBITORS ──
  { drug:"ACE Inhibitors", drug_aliases:["lisinopril","enalapril","ramipril","perindopril","captopril","benazepril","quinapril","trandolapril","zestril","vasotec","altace"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"ACE inhibitors chelate zinc (the ACE enzyme is a zinc-metalloprotease) and increase urinary zinc excretion via chelation and altered renal handling.",
    effect:"Zinc depletion with long-term use; may contribute to taste disturbances (dysgeusia — a known ACE inhibitor side effect), immune dysfunction.",
    management:"Monitor zinc in long-term users, especially those with taste disturbance. Supplement zinc if deficient.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"ACE Inhibitors", drug_aliases:["lisinopril","enalapril","ramipril","perindopril","captopril","benazepril","zestril","vasotec","altace"],
    nutrient:"Potassium", nutrient_aliases:["potassium","k","potassium chloride","potassium supplement","no salt","nu-salt"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"ACE inhibitors reduce angiotensin II-driven aldosterone secretion, decreasing renal potassium excretion. Potassium supplements push serum K+ higher, risking dangerous hyperkalemia.",
    effect:"Hyperkalemia — cardiac arrhythmias, potentially fatal.",
    management:"AVOID potassium supplements and potassium-containing salt substitutes unless specifically prescribed and monitored. Monitor serum potassium regularly.",
    evidence:"established", onset:"acute", timing_note:null },

  // ── LOOP DIURETICS ──
  { drug:"Furosemide / Loop Diuretics", drug_aliases:["furosemide","bumetanide","torsemide","ethacrynic acid","lasix"],
    nutrient:"Potassium", nutrient_aliases:["potassium","k"],
    severity:"major", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Inhibition of Na-K-2Cl cotransporter (NKCC2) in the thick ascending limb of Henle causes obligatory potassium wasting in the urine.",
    effect:"Hypokalemia; risk of cardiac arrhythmias (especially in patients on digoxin), muscle weakness, metabolic alkalosis.",
    management:"Monitor serum potassium frequently. Increase dietary potassium (bananas, spinach, beans) or prescribe potassium supplementation. Consider adding potassium-sparing diuretic.",
    evidence:"established", onset:"acute", timing_note:null },

  { drug:"Furosemide / Loop Diuretics", drug_aliases:["furosemide","bumetanide","torsemide","lasix"],
    nutrient:"Magnesium", nutrient_aliases:["magnesium","mg"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Loop diuretics inhibit magnesium reabsorption in the loop of Henle, causing urinary magnesium wasting.",
    effect:"Hypomagnesemia; can cause refractory hypokalemia (must correct magnesium first), muscle cramps, cardiac arrhythmias.",
    management:"Monitor serum magnesium. Supplement magnesium. Note: hypokalemia may be refractory until magnesium deficiency is corrected.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Furosemide / Loop Diuretics", drug_aliases:["furosemide","bumetanide","torsemide","lasix"],
    nutrient:"Thiamine (B1)", nutrient_aliases:["thiamine","thiamin","b1","vitamin b1"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Furosemide inhibits thiamine renal tubular reabsorption and also reduces intestinal thiamine transport. Particularly relevant in heart failure patients with already poor nutritional status.",
    effect:"Thiamine deficiency (beriberi); can worsen cardiac function in heart failure — important since furosemide is often used in HF.",
    management:"Supplement thiamine (100mg/day) in heart failure patients on chronic furosemide. Screen for thiamine deficiency in unexplained worsening heart failure.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"Furosemide / Loop Diuretics", drug_aliases:["furosemide","bumetanide","torsemide","lasix"],
    nutrient:"Calcium", nutrient_aliases:["calcium","ca"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Loop diuretics increase urinary calcium excretion (unlike thiazides which retain calcium).",
    effect:"Hypocalcemia with long-term use; contributes to osteoporosis.",
    management:"Monitor calcium and bone density in long-term users. Supplement calcium and vitamin D.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Furosemide / Loop Diuretics", drug_aliases:["furosemide","bumetanide","torsemide","lasix"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn"],
    severity:"minor", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Increased urinary zinc excretion with loop diuretic use.",
    effect:"Zinc deficiency with long-term use; impaired immune function, wound healing, taste.",
    management:"Monitor zinc in long-term users. Consider supplementation.",
    evidence:"probable", onset:"chronic", timing_note:null },

  // ── THIAZIDE DIURETICS ──
  { drug:"Thiazide Diuretics", drug_aliases:["hydrochlorothiazide","chlorthalidone","indapamide","hctz","microzide","thalitone"],
    nutrient:"Potassium", nutrient_aliases:["potassium","k"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Thiazides inhibit Na-Cl cotransporter in the distal convoluted tubule, increasing Na+ delivery to collecting duct and secondarily increasing K+ secretion.",
    effect:"Hypokalemia; arrhythmia risk, muscle weakness.",
    management:"Monitor potassium. Dietary supplementation or potassium supplements as directed by physician.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Thiazide Diuretics", drug_aliases:["hydrochlorothiazide","chlorthalidone","indapamide","hctz"],
    nutrient:"Magnesium", nutrient_aliases:["magnesium","mg"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Increased renal magnesium excretion with thiazide use.",
    effect:"Hypomagnesemia; can potentiate hypokalemia.",
    management:"Monitor magnesium. Supplement if deficient.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Thiazide Diuretics", drug_aliases:["hydrochlorothiazide","chlorthalidone","indapamide","hctz"],
    nutrient:"Calcium", nutrient_aliases:["calcium","ca"],
    severity:"informational", direction:"drug_affects_nutrient", type:"retention",
    mechanism:"Unlike loop diuretics, thiazides INCREASE calcium reabsorption in the distal tubule. This is exploited therapeutically in calcium oxalate kidney stone prevention.",
    effect:"Hypercalcemia risk if combined with calcium supplementation or vitamin D. Used therapeutically to reduce kidney stone recurrence.",
    management:"AVOID excess calcium supplementation in thiazide users. Monitor serum calcium. Milk-alkali syndrome risk if taking both calcium carbonate and thiazide.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Thiazide Diuretics", drug_aliases:["hydrochlorothiazide","chlorthalidone","indapamide","hctz"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn"],
    severity:"minor", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Increased urinary zinc excretion.",
    effect:"Mild zinc depletion.",
    management:"Monitor zinc in long-term users.",
    evidence:"probable", onset:"chronic", timing_note:null },

  // ── CORTICOSTEROIDS ──
  { drug:"Corticosteroids", drug_aliases:["prednisone","prednisolone","dexamethasone","methylprednisolone","budesonide","cortisone","hydrocortisone","medrol","deltasone"],
    nutrient:"Calcium", nutrient_aliases:["calcium","ca"],
    severity:"major", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Corticosteroids reduce intestinal calcium absorption (by opposing vitamin D action), increase renal calcium excretion, and directly suppress osteoblast activity.",
    effect:"Leading cause of drug-induced osteoporosis. 10–20% of chronic steroid users develop fractures. Hypocalcemia possible with high doses.",
    management:"Supplement calcium (1000–1500mg/day) and vitamin D (800–2000 IU/day) in all chronic steroid users. Consider bisphosphonate therapy for long-term use (>3 months). Monitor bone density.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Corticosteroids", drug_aliases:["prednisone","prednisolone","dexamethasone","methylprednisolone","medrol","deltasone"],
    nutrient:"Vitamin D", nutrient_aliases:["vitamin d","vit d","cholecalciferol","d3","ergocalciferol","d2","calciferol"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Corticosteroids reduce 25-OH vitamin D hydroxylation to active 1,25(OH)2D3, decrease intestinal vitamin D receptor expression, and increase vitamin D catabolism.",
    effect:"Functional vitamin D deficiency contributing to reduced calcium absorption and bone loss.",
    management:"Supplement vitamin D (800–2000 IU/day or higher to maintain 25-OH D >30 ng/mL) in all patients on chronic corticosteroids.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Corticosteroids", drug_aliases:["prednisone","prednisolone","dexamethasone","methylprednisolone"],
    nutrient:"Potassium", nutrient_aliases:["potassium","k"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Mineralocorticoid activity of corticosteroids promotes sodium retention and potassium excretion in the kidney collecting duct.",
    effect:"Hypokalemia; muscle weakness, cardiac arrhythmias.",
    management:"Monitor serum potassium. Increase dietary potassium. Supplement if needed.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Corticosteroids", drug_aliases:["prednisone","prednisolone","dexamethasone","methylprednisolone"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn"],
    severity:"minor", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Corticosteroids increase urinary zinc excretion and may impair zinc-dependent immune functions.",
    effect:"Zinc depletion contributing to impaired immunity and wound healing.",
    management:"Consider zinc supplementation in chronic steroid users, especially those with poor healing.",
    evidence:"probable", onset:"chronic", timing_note:null },

  // ── TETRACYCLINES ──
  { drug:"Tetracyclines", drug_aliases:["doxycycline","tetracycline","minocycline","vibramycin","oracea"],
    nutrient:"Calcium", nutrient_aliases:["calcium","ca","dairy","milk"],
    severity:"major", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Calcium ions chelate tetracyclines in the GI tract, forming poorly soluble complexes that cannot be absorbed.",
    effect:"Reduction in antibiotic absorption by 50–80%. Subtherapeutic antibiotic levels; treatment failure.",
    management:"Take tetracyclines at least 1–2 hours BEFORE or 4 hours AFTER dairy products, calcium supplements, or antacids.",
    evidence:"established", onset:"acute", timing_note:"Separate by 1–2 hours before or 4 hours after calcium" },

  { drug:"Tetracyclines", drug_aliases:["doxycycline","tetracycline","minocycline","vibramycin"],
    nutrient:"Iron", nutrient_aliases:["iron","fe","ferrous sulfate"],
    severity:"major", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Iron chelates tetracyclines, forming insoluble iron-tetracycline complexes. Both antibiotic and iron absorption are impaired.",
    effect:"Antibiotic absorption reduced 50–80%; iron absorption also reduced.",
    management:"Separate iron supplements and tetracyclines by at least 2–3 hours.",
    evidence:"established", onset:"acute", timing_note:"Separate by 2–3 hours" },

  { drug:"Tetracyclines", drug_aliases:["doxycycline","tetracycline","minocycline","vibramycin"],
    nutrient:"Magnesium", nutrient_aliases:["magnesium","mg"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Magnesium chelates tetracyclines (present in antacids, supplements), reducing antibiotic absorption.",
    effect:"Reduced antibiotic absorption and efficacy.",
    management:"Separate magnesium-containing products and tetracyclines by at least 2 hours.",
    evidence:"established", onset:"acute", timing_note:"Separate by 2 hours" },

  { drug:"Tetracyclines", drug_aliases:["doxycycline","tetracycline","minocycline","vibramycin"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Zinc chelates tetracyclines, reducing doxycycline absorption by approximately 30–40%.",
    effect:"Reduced antibiotic bioavailability.",
    management:"Separate zinc supplements and tetracyclines by 2–3 hours.",
    evidence:"established", onset:"acute", timing_note:"Separate by 2 hours" },

  { drug:"Tetracyclines", drug_aliases:["doxycycline","tetracycline","minocycline","vibramycin"],
    nutrient:"Vitamin A", nutrient_aliases:["vitamin a","retinol","retinyl palmitate","vit a","preformed vitamin a"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Both high-dose vitamin A and tetracyclines independently increase intracranial pressure. The combination has an additive effect on this mechanism.",
    effect:"Pseudotumor cerebri (benign intracranial hypertension) — severe headache, visual changes, papilledema.",
    management:"AVOID high-dose vitamin A supplements with tetracycline antibiotics. This combination is contraindicated.",
    evidence:"established", onset:"acute", timing_note:null },

  // ── FLUOROQUINOLONES ──
  { drug:"Fluoroquinolones", drug_aliases:["ciprofloxacin","levofloxacin","moxifloxacin","cipro","levaquin","avelox"],
    nutrient:"Calcium", nutrient_aliases:["calcium","ca","dairy"],
    severity:"major", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Calcium forms chelate complexes with fluoroquinolones (especially at the 4-oxo and 3-carboxyl groups), dramatically reducing antibiotic absorption.",
    effect:"Fluoroquinolone absorption reduced up to 50–70%; treatment failure risk.",
    management:"Take fluoroquinolone 2 hours BEFORE or 6 hours AFTER calcium. Avoid dairy, antacids, and calcium supplements within this window.",
    evidence:"established", onset:"acute", timing_note:"Take fluoroquinolone 2 hours before or 6 hours after calcium" },

  { drug:"Fluoroquinolones", drug_aliases:["ciprofloxacin","levofloxacin","moxifloxacin","cipro","levaquin","avelox"],
    nutrient:"Iron", nutrient_aliases:["iron","fe","ferrous sulfate"],
    severity:"major", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Iron chelates fluoroquinolones, significantly reducing antibiotic absorption.",
    effect:"Fluoroquinolone absorption reduced 30–70%.",
    management:"Take fluoroquinolone 2 hours before or 6 hours after iron supplements.",
    evidence:"established", onset:"acute", timing_note:"2 hours before or 6 hours after iron" },

  { drug:"Fluoroquinolones", drug_aliases:["ciprofloxacin","levofloxacin","moxifloxacin","cipro","levaquin","avelox"],
    nutrient:"Magnesium", nutrient_aliases:["magnesium","mg"],
    severity:"major", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Magnesium (in antacids and supplements) chelates fluoroquinolones, reducing absorption.",
    effect:"Significantly reduced antibiotic bioavailability.",
    management:"Take fluoroquinolone 2 hours before or 6 hours after magnesium-containing products.",
    evidence:"established", onset:"acute", timing_note:"2 hours before or 6 hours after magnesium" },

  { drug:"Fluoroquinolones", drug_aliases:["ciprofloxacin","levofloxacin","moxifloxacin","cipro","levaquin","avelox"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Zinc chelates fluoroquinolones, reducing absorption.",
    effect:"Reduced fluoroquinolone bioavailability.",
    management:"Separate zinc supplements by 2 hours before or 4–6 hours after fluoroquinolone.",
    evidence:"established", onset:"acute", timing_note:"Separate by 2–4 hours" },

  // ── METHOTREXATE ──
  { drug:"Methotrexate", drug_aliases:["mtx","methotrexate","trexall","rheumatrex","otrexup"],
    nutrient:"Folate", nutrient_aliases:["folate","folic acid","b9","vitamin b9","5-mthf","methylfolate","l-methylfolate"],
    severity:"major", direction:"drug_affects_nutrient", type:"pharmacodynamic",
    mechanism:"Methotrexate competitively inhibits dihydrofolate reductase (DHFR), blocking conversion of folate to its active tetrahydrofolate form. This is its therapeutic mechanism in cancer but causes folate deficiency at all doses.",
    effect:"Megaloblastic anemia, mucositis (painful mouth sores), GI toxicity, hepatotoxicity. Severe in cancer doses; clinically meaningful even at low rheumatologic doses.",
    management:"Routine folate supplementation (1–5mg/day, or 5–15mg/week on non-MTX days) is STANDARD OF CARE for rheumatologic/dermatologic MTX. Does not significantly blunt anti-inflammatory efficacy.",
    evidence:"established", onset:"chronic", timing_note:"Take folate on non-methotrexate days (or daily except day of MTX)" },

  // ── PHENYTOIN / ANTICONVULSANTS ──
  { drug:"Phenytoin", drug_aliases:["phenytoin","dilantin","fosphenytoin","diphenylhydantoin"],
    nutrient:"Vitamin D", nutrient_aliases:["vitamin d","vit d","cholecalciferol","d3","ergocalciferol"],
    severity:"major", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Phenytoin induces CYP24A1, the enzyme that catabolizes 25-hydroxyvitamin D and 1,25-dihydroxyvitamin D, accelerating vitamin D degradation. Also reduces intestinal calcium absorption.",
    effect:"Vitamin D deficiency, hypocalcemia, osteomalacia, osteoporosis. Risk proportional to duration and dose.",
    management:"Supplement vitamin D (800–4000 IU/day based on levels). Monitor 25-OH vitamin D and calcium. Consider bone density monitoring.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Phenytoin", drug_aliases:["phenytoin","dilantin","fosphenytoin"],
    nutrient:"Folate", nutrient_aliases:["folate","folic acid","b9"],
    severity:"major", direction:"bidirectional", type:"bidirectional",
    mechanism:"Phenytoin reduces folate absorption and increases folate catabolism via CYP induction. CONVERSELY, high-dose folate supplementation induces phenytoin metabolism, reducing drug levels.",
    effect:"Phenytoin causes megaloblastic anemia (folate deficiency). High-dose folate can precipitate seizure breakthrough by reducing phenytoin levels.",
    management:"Use low-dose folate (400–800mcg/day) — enough to prevent deficiency without inducing phenytoin metabolism. Monitor phenytoin levels and seizure frequency if adjusting folate.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Phenytoin", drug_aliases:["phenytoin","dilantin","fosphenytoin"],
    nutrient:"Calcium", nutrient_aliases:["calcium","ca"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Calcium reduces phenytoin absorption from the GI tract.",
    effect:"Reduced phenytoin bioavailability; potential for subtherapeutic drug levels.",
    management:"Separate calcium supplements from phenytoin by 2–3 hours.",
    evidence:"probable", onset:"acute", timing_note:"Separate by 2–3 hours" },

  { drug:"Phenytoin", drug_aliases:["phenytoin","dilantin","fosphenytoin"],
    nutrient:"Biotin", nutrient_aliases:["biotin","b7","vitamin b7","vitamin h"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Phenytoin competitively inhibits biotinidase (the enzyme that recycles biotin) and may inhibit intestinal biotin absorption.",
    effect:"Biotin deficiency — hair loss, skin rash, neurological symptoms. May also contribute to metabolic issues.",
    management:"Supplement biotin (2–5mg/day) in patients on long-term phenytoin therapy.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"Carbamazepine", drug_aliases:["carbamazepine","tegretol","carbatrol","epitol"],
    nutrient:"Vitamin D", nutrient_aliases:["vitamin d","vit d","cholecalciferol","d3"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Like phenytoin, carbamazepine induces CYP enzymes including CYP24A1, accelerating vitamin D catabolism.",
    effect:"Vitamin D deficiency and osteomalacia with long-term use.",
    management:"Supplement vitamin D; monitor levels. Assess bone density in long-term users.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Carbamazepine", drug_aliases:["carbamazepine","tegretol","carbatrol"],
    nutrient:"Folate", nutrient_aliases:["folate","folic acid","b9"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"CYP enzyme induction increases folate catabolism.",
    effect:"Megaloblastic anemia; increased neural tube defect risk in pregnancy.",
    management:"Supplement folate (400–800mcg/day; higher in pregnancy). Monitor folate and CBC.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Valproic Acid", drug_aliases:["valproate","valproic acid","depakote","depakene","divalproex","vpa"],
    nutrient:"Carnitine", nutrient_aliases:["carnitine","l-carnitine","acetyl-l-carnitine","acetyl carnitine"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Valproate impairs carnitine biosynthesis (via inhibition of γ-butyrobetaine hydroxylase) and increases urinary carnitine excretion via acylcarnitine formation.",
    effect:"Carnitine deficiency (especially in children); may contribute to VPA-induced hepatotoxicity and hyperammonemia.",
    management:"Consider carnitine supplementation (50–100mg/kg/day) in children on VPA, especially those with poor nutrition or hepatic concerns.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"Valproic Acid", drug_aliases:["valproate","valproic acid","depakote","depakene","vpa"],
    nutrient:"Folate", nutrient_aliases:["folate","folic acid","b9"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"pharmacodynamic",
    mechanism:"Valproate is a folate antagonist. Particularly important in pregnancy due to neural tube defect risk.",
    effect:"Folate deficiency; high-dose VPA in pregnancy associated with neural tube defects.",
    management:"High-dose folate supplementation (4–5mg/day) in women of childbearing potential on VPA. Routine folate for all VPA patients.",
    evidence:"established", onset:"chronic", timing_note:null },

  // ── ISONIAZID ──
  { drug:"Isoniazid", drug_aliases:["isoniazid","inh","nydrazid","rifater"],
    nutrient:"Vitamin B6", nutrient_aliases:["vitamin b6","pyridoxine","pyridoxal","b6","p5p","pyridoxal-5-phosphate"],
    severity:"major", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Isoniazid is a structural pyridoxine analog. It inhibits pyridoxal kinase (preventing B6 activation to pyridoxal-5-phosphate) and forms hydrazones with pyridoxal that are renally excreted, depleting total body B6.",
    effect:"Peripheral neuropathy (dose-dependent) — the most common serious side effect of INH. Sensory > motor involvement.",
    management:"B6 supplementation (25–50mg/day) is STANDARD OF CARE with isoniazid therapy. Higher doses (100mg/day) for high-risk patients (elderly, diabetics, alcoholics, malnourished, pregnant).",
    evidence:"established", onset:"chronic", timing_note:"Start B6 concurrently with INH initiation" },

  { drug:"Isoniazid", drug_aliases:["isoniazid","inh","nydrazid"],
    nutrient:"Niacin (B3)", nutrient_aliases:["niacin","nicotinic acid","nicotinamide","b3","vitamin b3"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Isoniazid interferes with the conversion of tryptophan to niacin via the kynurenine pathway, and may directly impair niacin utilization.",
    effect:"Pellagra (niacin deficiency) — dermatitis, diarrhea, dementia (3 Ds). Rare but reported.",
    management:"Supplement niacin if signs of pellagra develop. Ensure adequate dietary niacin. B6 supplementation also helps (B6 is required for tryptophan→niacin conversion).",
    evidence:"probable", onset:"chronic", timing_note:null },

  // ── ORAL CONTRACEPTIVES ──
  { drug:"Oral Contraceptives", drug_aliases:["birth control pill","ocp","combined oral contraceptive","estrogen","ethinyl estradiol","yasmin","yaz","lo loestrin","ortho tri-cyclen"],
    nutrient:"Vitamin B6", nutrient_aliases:["vitamin b6","pyridoxine","b6","p5p"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Estrogen upregulates tryptophan metabolism via the kynurenine pathway, diverting B6 away from other metabolic functions and increasing B6 requirements.",
    effect:"B6 depletion; may contribute to depression, mood changes, and impaired tryptophan/serotonin metabolism in OCP users.",
    management:"Consider B6 supplementation (10–25mg/day) in OCP users experiencing mood changes or depression. Baseline B6 levels can guide supplementation.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"Oral Contraceptives", drug_aliases:["birth control pill","ocp","combined oral contraceptive","ethinyl estradiol","yasmin","yaz"],
    nutrient:"Folate", nutrient_aliases:["folate","folic acid","b9","methylfolate"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Estrogen may impair folate transport and increase folate catabolism. Important implication for women discontinuing OCP who wish to conceive.",
    effect:"Mild folate depletion; increased neural tube defect risk in pregnancies conceived shortly after stopping OCP.",
    management:"Take prenatal vitamins (with folate) for at least 1–3 months before trying to conceive after stopping OCP.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"Oral Contraceptives", drug_aliases:["birth control pill","ocp","combined oral contraceptive","ethinyl estradiol","yasmin"],
    nutrient:"St. John's Wort", nutrient_aliases:["st. john's wort","st johns wort","hypericum","sjw"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"St. John's Wort induces CYP3A4 (which metabolizes ethinyl estradiol and progestins) and P-glycoprotein, significantly reducing oral contraceptive plasma levels.",
    effect:"Contraceptive failure; unintended pregnancy. This interaction is well-documented and clinically significant.",
    management:"CONTRAINDICATED. Use alternative or additional contraception if patient uses St. John's Wort. Counsel all patients starting OCP about this interaction.",
    evidence:"established", onset:"chronic", timing_note:"Effect builds over 2–4 weeks of St. John's Wort use" },

  { drug:"Oral Contraceptives", drug_aliases:["birth control pill","ocp","ethinyl estradiol"],
    nutrient:"Vitamin C", nutrient_aliases:["vitamin c","ascorbic acid","ascorbate","vit c"],
    severity:"minor", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"High-dose vitamin C (>1g/day) may increase bioavailability of ethinyl estradiol by competing for sulfation in the gut wall, reducing first-pass metabolism.",
    effect:"Slightly elevated estrogen levels; potential increase in estrogen-related side effects.",
    management:"Avoid very high-dose vitamin C (>1g) with OCP. Standard dietary vitamin C is not a concern.",
    evidence:"possible", onset:"acute", timing_note:null },

  // ── DIGOXIN ──
  { drug:"Digoxin", drug_aliases:["digoxin","lanoxin","digitalis","cardiac glycoside"],
    nutrient:"Potassium", nutrient_aliases:["potassium","k"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Digoxin and potassium both bind to the same site on Na/K-ATPase. Hypokalemia increases the number of unoccupied binding sites, greatly increasing digoxin's inhibitory effect and toxicity.",
    effect:"Digoxin toxicity at normal plasma levels: nausea, vomiting, visual disturbances (yellow-green halos), bradyarrhythmias, heart block.",
    management:"CRITICAL: Maintain serum potassium 4.0–5.0 mEq/L in patients on digoxin. Hypokalemia from diuretics is a major trigger of digoxin toxicity.",
    evidence:"established", onset:"acute", timing_note:null },

  { drug:"Digoxin", drug_aliases:["digoxin","lanoxin","digitalis"],
    nutrient:"Magnesium", nutrient_aliases:["magnesium","mg"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Hypomagnesemia downregulates Na/K-ATPase, similarly to hypokalemia, increasing digoxin sensitivity and toxicity risk.",
    effect:"Digoxin toxicity even at normal plasma concentrations.",
    management:"Maintain normal magnesium levels. Correct magnesium deficiency (common with diuretics) before adjusting digoxin dose.",
    evidence:"established", onset:"acute", timing_note:null },

  { drug:"Digoxin", drug_aliases:["digoxin","lanoxin","digitalis"],
    nutrient:"St. John's Wort", nutrient_aliases:["st. john's wort","st johns wort","hypericum","sjw"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"St. John's Wort induces P-glycoprotein (P-gp), which is the major transporter responsible for digoxin absorption and renal elimination.",
    effect:"Digoxin plasma levels reduced by 25–40%; risk of subtherapeutic cardiac control, arrhythmias.",
    management:"AVOID combination. If unavoidable, monitor digoxin levels closely and expect significant dose adjustments.",
    evidence:"established", onset:"chronic", timing_note:null },

  // ── LITHIUM ──
  { drug:"Lithium", drug_aliases:["lithium carbonate","lithium citrate","eskalith","lithobid"],
    nutrient:"Sodium", nutrient_aliases:["sodium","salt","nacl","table salt"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"Lithium and sodium are handled similarly by renal proximal tubular cells (both reabsorbed via Na+/H+ exchanger). Sodium depletion triggers compensatory lithium reabsorption, elevating plasma lithium to potentially toxic levels.",
    effect:"Lithium toxicity: tremor, confusion, ataxia, polyuria, cardiac arrhythmias — potentially fatal.",
    management:"CRITICAL: Maintain stable sodium intake. Avoid low-sodium diets, excessive sweating (exercise, heat), vomiting, diarrhea, or diuretics without lithium level monitoring. Maintain adequate hydration.",
    evidence:"established", onset:"acute", timing_note:null },

  // ── LEVODOPA ──
  { drug:"Levodopa", drug_aliases:["levodopa","l-dopa","sinemet","carbidopa-levodopa","stalevo","madopar"],
    nutrient:"Vitamin B6", nutrient_aliases:["vitamin b6","pyridoxine","b6","p5p"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"B6 (as pyridoxal-5-phosphate) is the cofactor for DOPA decarboxylase, the enzyme that converts levodopa to dopamine peripherally. Without carbidopa, high B6 dramatically increases peripheral conversion, preventing levodopa from reaching the brain.",
    effect:"With levodopa ALONE (no carbidopa): B6 supplements dramatically reduce efficacy. With carbidopa/levodopa (Sinemet): carbidopa blocks peripheral DOPA decarboxylase so this interaction is largely negated.",
    management:"AVOID B6 supplements with levodopa monotherapy. Standard B6 intake is safe with carbidopa/levodopa (Sinemet) combination.",
    evidence:"established", onset:"acute", timing_note:"Only clinically significant without carbidopa" },

  { drug:"Levodopa", drug_aliases:["levodopa","l-dopa","sinemet","carbidopa-levodopa","stalevo"],
    nutrient:"Iron", nutrient_aliases:["iron","fe","ferrous sulfate"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Iron chelates levodopa in the GI tract, forming chelates that reduce levodopa absorption by up to 50%.",
    effect:"Reduced levodopa bioavailability; worsening Parkinson's motor control.",
    management:"Separate levodopa and iron by at least 2 hours.",
    evidence:"established", onset:"acute", timing_note:"Separate by at least 2 hours" },

  // ── SPIRONOLACTONE ──
  { drug:"Spironolactone", drug_aliases:["spironolactone","aldactone","potassium-sparing diuretic"],
    nutrient:"Potassium", nutrient_aliases:["potassium","k","potassium supplement"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Spironolactone is an aldosterone antagonist that causes potassium retention. Supplemental potassium further elevates serum K+.",
    effect:"Dangerous hyperkalemia — cardiac arrest risk.",
    management:"AVOID potassium supplements and potassium-containing salt substitutes. Monitor serum potassium regularly.",
    evidence:"established", onset:"acute", timing_note:null },

  // ── CHOLESTYRAMINE / BILE ACID SEQUESTRANTS ──
  { drug:"Cholestyramine / Bile Acid Sequestrants", drug_aliases:["cholestyramine","colestipol","colesevelam","questran","colestid","welchol"],
    nutrient:"Fat-Soluble Vitamins (A, D, E, K)", nutrient_aliases:["vitamin a","vitamin d","vitamin e","vitamin k","fat soluble vitamins","retinol","cholecalciferol","tocopherol","phylloquinone"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Cholestyramine binds bile acids in the intestine. Without bile acids, fat-soluble vitamin micelle formation and absorption is significantly impaired.",
    effect:"Deficiency of vitamins A, D, E, and K with chronic use. Vitamin K deficiency can cause bleeding.",
    management:"Supplement fat-soluble vitamins, taken 1 hour BEFORE or 4–6 hours AFTER cholestyramine. Monitor levels in long-term users.",
    evidence:"established", onset:"chronic", timing_note:"Take vitamins 1 hour before or 4–6 hours after cholestyramine" },

  { drug:"Cholestyramine / Bile Acid Sequestrants", drug_aliases:["cholestyramine","colestipol","colesevelam","questran"],
    nutrient:"Folate", nutrient_aliases:["folate","folic acid","b9"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Cholestyramine may bind folate in the gut, reducing its absorption.",
    effect:"Folate deficiency with chronic use.",
    management:"Supplement folate. Take supplement well before or after cholestyramine.",
    evidence:"probable", onset:"chronic", timing_note:"Take folate 1 hour before or 4–6 hours after" },

  { drug:"Cholestyramine / Bile Acid Sequestrants", drug_aliases:["cholestyramine","colestipol","colesevelam","questran"],
    nutrient:"Iron", nutrient_aliases:["iron","fe"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Cholestyramine may bind dietary and supplemental iron in the gut.",
    effect:"Iron deficiency anemia with long-term use.",
    management:"Monitor iron status. Supplement iron well separated from cholestyramine.",
    evidence:"probable", onset:"chronic", timing_note:null },

  // ── TRIMETHOPRIM / TMP-SMX ──
  { drug:"Trimethoprim / TMP-SMX", drug_aliases:["trimethoprim","tmp-smx","bactrim","septrin","co-trimoxazole","sulfamethoxazole-trimethoprim"],
    nutrient:"Folate", nutrient_aliases:["folate","folic acid","b9"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"pharmacodynamic",
    mechanism:"Trimethoprim inhibits human dihydrofolate reductase (DHFR), though with much lower affinity than bacterial DHFR. Prolonged use can cause functionally significant folate deficiency, especially in folate-depleted patients.",
    effect:"Megaloblastic changes, anemia, and leukopenia with prolonged use (especially in elderly, malnourished, or pregnant women).",
    management:"Supplement with folinic acid (not folic acid, which requires DHFR activation) if prolonged use is unavoidable. Screen for folate status.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"Trimethoprim / TMP-SMX", drug_aliases:["trimethoprim","tmp-smx","bactrim","septrin"],
    nutrient:"Potassium", nutrient_aliases:["potassium","k"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"retention",
    mechanism:"Trimethoprim blocks epithelial sodium channels (ENaC) in the renal collecting duct (same mechanism as amiloride), causing potassium retention.",
    effect:"Hyperkalemia — particularly risky in elderly, patients with renal impairment, or those on other potassium-raising drugs.",
    management:"Monitor potassium during TMP-SMX course, especially in high-risk patients. Avoid potassium supplements during treatment.",
    evidence:"established", onset:"acute", timing_note:null },

  // ── SSRIs ──
  { drug:"SSRIs", drug_aliases:["fluoxetine","sertraline","paroxetine","citalopram","escitalopram","prozac","zoloft","paxil","celexa","lexapro"],
    nutrient:"St. John's Wort", nutrient_aliases:["st. john's wort","st johns wort","hypericum","sjw"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"St. John's Wort (hypericin, hyperforin) inhibits serotonin reuptake independently of SSRIs. Combined serotonergic activity leads to serotonin syndrome.",
    effect:"Serotonin syndrome: agitation, confusion, rapid heart rate, high blood pressure, dilated pupils, muscle twitching/rigidity — potentially life-threatening.",
    management:"CONTRAINDICATED. Never combine SSRIs with St. John's Wort. Allow adequate washout period when switching.",
    evidence:"established", onset:"acute", timing_note:null },

  { drug:"SSRIs", drug_aliases:["fluoxetine","sertraline","paroxetine","citalopram","escitalopram","prozac","zoloft","paxil","celexa","lexapro"],
    nutrient:"5-HTP", nutrient_aliases:["5-htp","5-hydroxytryptophan","5 htp"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"5-HTP is the immediate precursor to serotonin. Combined with SSRIs (which block serotonin reuptake), it can cause excessive synaptic serotonin accumulation.",
    effect:"Serotonin syndrome risk.",
    management:"AVOID 5-HTP with SSRIs. If serotonin augmentation is needed, do so under specialist supervision.",
    evidence:"probable", onset:"acute", timing_note:null },

  // ── BISPHOSPHONATES ──
  { drug:"Bisphosphonates", drug_aliases:["alendronate","risedronate","ibandronate","zoledronic acid","fosamax","actonel","boniva"],
    nutrient:"Calcium", nutrient_aliases:["calcium","ca","dairy"],
    severity:"major", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Calcium and other polyvalent cations form insoluble complexes with bisphosphonates, drastically reducing their already-poor oral bioavailability (<1%).",
    effect:"Near-complete loss of bisphosphonate absorption; no therapeutic effect.",
    management:"Take bisphosphonates with PLAIN WATER only, on an EMPTY STOMACH in the morning. Wait at least 30 minutes before eating or taking any supplements. Stay upright to prevent esophageal irritation.",
    evidence:"established", onset:"acute", timing_note:"Take on empty stomach, wait 30–60 min before calcium" },

  { drug:"Bisphosphonates", drug_aliases:["alendronate","risedronate","ibandronate","fosamax","actonel"],
    nutrient:"Vitamin D", nutrient_aliases:["vitamin d","vit d","cholecalciferol","d3"],
    severity:"informational", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Adequate vitamin D and calcium are prerequisites for bisphosphonate therapy. Vitamin D deficiency at baseline increases risk of hypocalcemia when bisphosphonate suppresses bone resorption.",
    effect:"Hypocalcemia if vitamin D deficient when starting bisphosphonates.",
    management:"ALWAYS correct vitamin D deficiency BEFORE starting bisphosphonate therapy. Maintain supplementation throughout treatment.",
    evidence:"established", onset:"acute", timing_note:null },

  // ── CYCLOSPORINE ──
  { drug:"Cyclosporine", drug_aliases:["cyclosporine","ciclosporin","sandimmune","neoral","gengraf"],
    nutrient:"St. John's Wort", nutrient_aliases:["st. john's wort","st johns wort","hypericum","sjw"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"St. John's Wort powerfully induces CYP3A4 and P-glycoprotein, which are responsible for cyclosporine metabolism and efflux.",
    effect:"Cyclosporine levels reduced by 50–60%; acute transplant rejection and graft loss.",
    management:"ABSOLUTELY CONTRAINDICATED in transplant patients. This combination has caused organ rejection.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Cyclosporine", drug_aliases:["cyclosporine","ciclosporin","sandimmune","neoral","gengraf"],
    nutrient:"Grapefruit", nutrient_aliases:["grapefruit","grapefruit juice","pomelo"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"Grapefruit furanocoumarins inhibit intestinal CYP3A4, increasing cyclosporine bioavailability unpredictably.",
    effect:"Markedly elevated cyclosporine levels; nephrotoxicity and other toxicities.",
    management:"Avoid grapefruit in transplant patients on cyclosporine.",
    evidence:"established", onset:"acute", timing_note:null },

  { drug:"Cyclosporine", drug_aliases:["cyclosporine","ciclosporin","sandimmune","neoral","gengraf"],
    nutrient:"Magnesium", nutrient_aliases:["magnesium","mg"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Cyclosporine causes renal tubular magnesium wasting.",
    effect:"Hypomagnesemia in 30–50% of transplant patients on cyclosporine.",
    management:"Monitor and supplement magnesium in all patients on cyclosporine.",
    evidence:"established", onset:"chronic", timing_note:null },

  // ── PENICILLAMINE ──
  { drug:"Penicillamine", drug_aliases:["penicillamine","cuprimine","depen"],
    nutrient:"Vitamin B6", nutrient_aliases:["vitamin b6","pyridoxine","b6","p5p"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Penicillamine forms a complex with pyridoxal (the aldehyde form of B6), creating a Schiff base that is renally excreted, depleting body B6 stores.",
    effect:"Peripheral neuropathy (B6 deficiency); may also cause optic neuritis.",
    management:"Supplement B6 (25–50mg/day) in all patients on penicillamine therapy.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Penicillamine", drug_aliases:["penicillamine","cuprimine","depen"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Zinc chelates penicillamine in the GI tract, reducing drug absorption.",
    effect:"Reduced penicillamine bioavailability; reduced therapeutic effect.",
    management:"Separate zinc supplements from penicillamine by at least 2 hours.",
    evidence:"probable", onset:"acute", timing_note:"Separate by 2 hours" },

  { drug:"Penicillamine", drug_aliases:["penicillamine","cuprimine","depen"],
    nutrient:"Iron", nutrient_aliases:["iron","fe"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Iron chelates penicillamine, reducing its GI absorption.",
    effect:"Reduced penicillamine bioavailability.",
    management:"Separate iron and penicillamine by 2 hours.",
    evidence:"probable", onset:"acute", timing_note:"Separate by 2 hours" },

  // ── ANTACIDS ──
  { drug:"Antacids", drug_aliases:["aluminum hydroxide","magnesium hydroxide","calcium carbonate","tums","maalox","mylanta","gaviscon","rolaids"],
    nutrient:"Phosphorus", nutrient_aliases:["phosphorus","phosphate"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Aluminum-containing antacids bind dietary phosphate in the GI tract, forming insoluble aluminum phosphate that is excreted in feces.",
    effect:"Phosphate depletion with chronic use: osteomalacia, muscle weakness, hypophosphatemia.",
    management:"Avoid long-term antacid use. If unavoidable, monitor phosphate and use lowest effective dose.",
    evidence:"established", onset:"chronic", timing_note:null },

  { drug:"Antacids", drug_aliases:["aluminum hydroxide","magnesium hydroxide","calcium carbonate","tums","maalox","mylanta"],
    nutrient:"Iron", nutrient_aliases:["iron","fe"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Alkaline pH from antacids impairs ferrous iron stability and absorption; antacid cations (Al3+, Mg2+, Ca2+) may also chelate iron.",
    effect:"Reduced iron absorption; iron deficiency with chronic use.",
    management:"Separate antacids and iron supplements by at least 2 hours.",
    evidence:"established", onset:"acute", timing_note:"Separate by 2 hours" },

  // ── GRAPEFRUIT ──
  { drug:"Grapefruit (food interaction)", drug_aliases:["grapefruit","grapefruit juice","pomelo","seville orange","bergamot"],
    nutrient:"(See drug-specific interactions)",
    nutrient_aliases:["grapefruit interaction","food-drug"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"Grapefruit contains furanocoumarins (bergamottin, 6',7'-dihydroxybergamottin) that IRREVERSIBLY inhibit intestinal CYP3A4 enzymes. Affected drugs metabolized by intestinal CYP3A4 have dramatically increased bioavailability. One glass affects drug levels for 24–72 hours.",
    effect:"Elevated plasma levels of many drugs including: calcium channel blockers (felodipine ×6, nifedipine), statins (simvastatin ×13, lovastatin, atorvastatin), immunosuppressants (cyclosporine, tacrolimus), benzodiazepines (midazolam, triazolam), buspirone, amiodarone, and many others.",
    management:"Check the complete grapefruit interaction list for any CYP3A4-metabolized drug. When in doubt, avoid grapefruit. Effect lasts 24–72 hours per serving.",
    evidence:"established", onset:"acute", timing_note:"Effect lasts 24–72 hours — not just immediate timing" },

  // ── ST. JOHN'S WORT ──
  { drug:"St. John's Wort", drug_aliases:["st. john's wort","st johns wort","hypericum perforatum","hypericum","sjw"],
    nutrient:"(Affects many drugs)",
    nutrient_aliases:["sjw interaction","herbal drug interaction"],
    severity:"major", direction:"nutrient_affects_drug", type:"pharmacokinetic",
    mechanism:"Hyperforin (the active constituent) is a powerful inducer of CYP3A4, CYP2C9, and P-glycoprotein. This significantly increases the clearance of many drugs, reducing their therapeutic plasma levels.",
    effect:"Reduced efficacy of: warfarin, oral contraceptives, HIV antiretrovirals, cyclosporine, digoxin, imatinib, SSRIs. Serotonin syndrome risk with serotonergic drugs.",
    management:"Screen all patients for St. John's Wort use. Avoid with any narrow-therapeutic-index drugs metabolized by CYP3A4/2C9. Interaction builds over 2–4 weeks. Stopping abruptly can also cause toxicity (rebound drug levels).",
    evidence:"established", onset:"chronic", timing_note:"Effect builds over 2–4 weeks; stopping also causes rebound" },

  // ── IRON (as nutrient) ──
  { drug:"Iron Supplements", drug_aliases:["iron","ferrous sulfate","ferrous gluconate","ferrous fumarate","ferric","iron bisglycinate","fe","iron supplement"],
    nutrient:"Vitamin C", nutrient_aliases:["vitamin c","ascorbic acid","ascorbate","vit c"],
    severity:"informational", direction:"bidirectional", type:"enhancement",
    mechanism:"Vitamin C (ascorbic acid) reduces ferric iron (Fe3+) to the better-absorbed ferrous form (Fe2+), and also chelates iron in a soluble complex that resists precipitation at intestinal pH.",
    effect:"Vitamin C significantly enhances non-heme iron absorption (can increase by 3–6 fold).",
    management:"BENEFICIAL interaction: take iron supplements with vitamin C-rich foods or 200–500mg vitamin C supplement to maximize iron absorption, especially when treating iron deficiency.",
    evidence:"established", onset:"acute", timing_note:"Take vitamin C simultaneously with iron for best effect" },

  { drug:"Iron Supplements", drug_aliases:["iron","ferrous sulfate","ferrous gluconate","fe","iron supplement"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn"],
    severity:"minor", direction:"bidirectional", type:"absorption",
    mechanism:"Iron and zinc compete for the divalent metal transporter DMT1 in the intestinal brush border. High supplemental doses of one can reduce absorption of the other.",
    effect:"High-dose iron supplements (>25mg) reduce zinc absorption; high-dose zinc reduces iron absorption. Food reduces this competition.",
    management:"Separate high-dose iron and zinc supplements. Taking with food largely eliminates this interaction. Avoid very high doses of either without monitoring.",
    evidence:"probable", onset:"acute", timing_note:"Separate by 2 hours when taking therapeutic doses" },

  { drug:"Iron Supplements", drug_aliases:["iron","ferrous sulfate","ferrous gluconate","fe"],
    nutrient:"Calcium", nutrient_aliases:["calcium","ca"],
    severity:"minor", direction:"nutrient_affects_drug", type:"absorption",
    mechanism:"Calcium inhibits non-heme iron absorption at the intestinal level (competes for DMT1 and other transport mechanisms).",
    effect:"Concurrent calcium (>300mg) reduces non-heme iron absorption by 30–50%.",
    management:"Separate iron and calcium supplements by 2 hours when treating iron deficiency. Taking with food and adequate vitamin C partially compensates.",
    evidence:"established", onset:"acute", timing_note:"Separate by 2 hours" },

  // ── COENZYME Q10 ──
  { drug:"Coenzyme Q10", drug_aliases:["coq10","ubiquinol","ubiquinone","q10","coenzyme q10"],
    nutrient:"Warfarin", nutrient_aliases:["warfarin","coumadin"],
    severity:"moderate", direction:"bidirectional", type:"pharmacodynamic",
    mechanism:"CoQ10 has structural similarity to vitamin K2 (menaquinone ring structure) and may exert mild vitamin K-like pro-coagulant activity.",
    effect:"May reduce anticoagulant effect of warfarin; decreased INR reported in some patients.",
    management:"Monitor INR if starting or stopping CoQ10 supplementation. Adjust warfarin dose as needed.",
    evidence:"possible", onset:"chronic", timing_note:null },

  // ── VITAMIN K (as nutrient) ──
  { drug:"Vitamin K", drug_aliases:["vitamin k","vit k","k1","k2","phylloquinone","menaquinone","mk-4","mk-7"],
    nutrient:"Warfarin", nutrient_aliases:["warfarin","coumadin","anticoagulant"],
    severity:"major", direction:"bidirectional", type:"pharmacodynamic",
    mechanism:"Vitamin K is the direct pharmacological target of warfarin. Vitamin K supplementation directly opposes warfarin's mechanism of action.",
    effect:"Reduced INR (warfarin resistance) with increased vitamin K intake. Even modest changes in K intake cause clinically significant INR fluctuations.",
    management:"Patients on warfarin must maintain CONSISTENT vitamin K intake. Do not eliminate vitamin K — instead, keep it steady. Alert prescriber to any major dietary changes.",
    evidence:"established", onset:"acute", timing_note:"INR changes within 24–72 hours of dietary changes" },

  { drug:"Vitamin K", drug_aliases:["vitamin k","vit k","k1","k2"],
    nutrient:"Broad-Spectrum Antibiotics", nutrient_aliases:["antibiotics","broad spectrum antibiotics","ciprofloxacin","amoxicillin","azithromycin","cephalosporins"],
    severity:"moderate", direction:"bidirectional", type:"depletion",
    mechanism:"Gut bacteria (primarily Bacteroides species) produce vitamin K2 (menaquinones). Broad-spectrum antibiotics reduce this gut flora contribution to vitamin K status.",
    effect:"Reduced vitamin K2 production; may worsen anticoagulant effect of warfarin in patients on both antibiotics and warfarin.",
    management:"Monitor INR closely in warfarin patients starting antibiotics. Consider vitamin K supplementation in patients with poor dietary intake on long antibiotic courses.",
    evidence:"probable", onset:"chronic", timing_note:null },

  // ── CALCIUM (as nutrient) ──
  { drug:"Calcium", drug_aliases:["calcium","ca","calcium carbonate","calcium citrate","calcium supplement","dairy"],
    nutrient:"Zinc", nutrient_aliases:["zinc","zn"],
    severity:"minor", direction:"bidirectional", type:"absorption",
    mechanism:"High calcium intake competes with zinc for intestinal absorption transporters.",
    effect:"High calcium doses (>1500mg) may reduce zinc absorption.",
    management:"Separate high-dose calcium and zinc supplements by at least 2 hours.",
    evidence:"probable", onset:"acute", timing_note:"Separate by 2 hours" },

  // ── ZINC (as nutrient) ──
  { drug:"Zinc", drug_aliases:["zinc","zn","zinc picolinate","zinc citrate","zinc gluconate","zinc sulfate","zinc bisglycinate"],
    nutrient:"Copper", nutrient_aliases:["copper","cu"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"High zinc intake induces intestinal metallothionein, a metal-binding protein that has higher affinity for copper than zinc. This traps copper in intestinal cells, reducing systemic copper absorption.",
    effect:"Copper deficiency with chronic high-dose zinc supplementation (>50mg/day). Manifests as anemia (sideroblastic), neutropenia, and neurological symptoms (myelopathy).",
    management:"Supplement copper (1–2mg/day) when using therapeutic zinc doses >40mg/day long-term. Typical 8–15mg/day zinc supplementation is safe without copper co-supplementation.",
    evidence:"established", onset:"chronic", timing_note:"Risk with >50mg/day zinc for >3 months" },

  // ── OMEGA-3 / FISH OIL ──
  { drug:"Omega-3 / Fish Oil", drug_aliases:["fish oil","omega 3","omega-3","epa","dha","fish oil supplement","fatty acids"],
    nutrient:"Antiplatelet / Anticoagulants", nutrient_aliases:["warfarin","aspirin","clopidogrel","aspirin and fish oil"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Omega-3 fatty acids (EPA+DHA) inhibit platelet thromboxane A2 synthesis and platelet aggregation at doses >3g/day. Additive with warfarin and antiplatelet drugs.",
    effect:"Enhanced bleeding risk with high-dose fish oil plus anticoagulants/antiplatelets.",
    management:"Doses <1g/day: generally safe. Doses 1–3g/day: monitor if on anticoagulants. >3g/day: monitor INR in warfarin patients. Low-dose fish oil (<1g) is generally considered safe.",
    evidence:"probable", onset:"chronic", timing_note:null },

  // ── ASPIRIN / NSAIDs ──
  { drug:"Aspirin / NSAIDs", drug_aliases:["aspirin","ibuprofen","naproxen","diclofenac","celecoxib","nsaid","nsaids","advil","motrin","aleve","voltaren"],
    nutrient:"Vitamin C", nutrient_aliases:["vitamin c","ascorbic acid"],
    severity:"minor", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Aspirin increases urinary excretion of vitamin C and may impair its cellular uptake.",
    effect:"Mild vitamin C depletion with chronic aspirin use.",
    management:"Consider vitamin C supplementation (200–500mg/day) in chronic aspirin users.",
    evidence:"probable", onset:"chronic", timing_note:null },

  { drug:"Aspirin / NSAIDs", drug_aliases:["aspirin","ibuprofen","naproxen","diclofenac","nsaid","nsaids","advil","motrin"],
    nutrient:"Iron", nutrient_aliases:["iron","fe"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"depletion",
    mechanism:"Chronic NSAID use damages gastric and intestinal mucosa, causing occult GI blood loss and iron depletion.",
    effect:"Iron deficiency anemia from chronic GI blood loss.",
    management:"Monitor hemoglobin and iron stores (ferritin) in chronic NSAID users. Use PPI for GI protection. Consider iron supplementation if deficient.",
    evidence:"established", onset:"chronic", timing_note:null },

  // ── VITAMIN D ──
  { drug:"Vitamin D", drug_aliases:["vitamin d","vit d","d3","cholecalciferol","d2","ergocalciferol","calcitriol","alfacalcidol"],
    nutrient:"Magnesium", nutrient_aliases:["magnesium","mg"],
    severity:"informational", direction:"bidirectional", type:"cofactor",
    mechanism:"Magnesium is a required cofactor for vitamin D activation — both the 25-hydroxylation in the liver and 1-hydroxylation in the kidney require magnesium-dependent enzymes. Vitamin D also increases magnesium absorption.",
    effect:"Magnesium deficiency can impair vitamin D activation, causing apparent 'vitamin D resistance.' High-dose vitamin D may deplete magnesium stores.",
    management:"Ensure adequate magnesium intake when supplementing with vitamin D, especially at higher doses. Correct magnesium deficiency first if vitamin D supplementation appears ineffective.",
    evidence:"established", onset:"chronic", timing_note:null },

  // ── SULFASALAZINE ──
  { drug:"Sulfasalazine", drug_aliases:["sulfasalazine","azulfidine","salazopyrin"],
    nutrient:"Folate", nutrient_aliases:["folate","folic acid","b9"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Sulfasalazine competitively inhibits intestinal folate transport (via inhibition of the proton-coupled folate transporter, PCFT), reducing folate absorption.",
    effect:"Folate deficiency — megaloblastic anemia, increased homocysteine.",
    management:"Supplement with folate (1mg/day) in all patients on long-term sulfasalazine. This is standard co-prescribing.",
    evidence:"established", onset:"chronic", timing_note:null },

  // ── H2 BLOCKERS ──
  { drug:"H2 Blockers", drug_aliases:["famotidine","ranitidine","cimetidine","nizatidine","pepcid","zantac","h2 blocker","h2 receptor antagonist"],
    nutrient:"Vitamin B12", nutrient_aliases:["b12","cobalamin"],
    severity:"minor", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"H2 blockers reduce gastric acid, impairing pepsin-mediated B12 release from food proteins (less severe than PPIs due to incomplete acid suppression).",
    effect:"Mild B12 depletion with chronic use; crystalline B12 supplements not affected.",
    management:"Monitor B12 in long-term H2 blocker users. Use crystalline B12 supplements if deficient.",
    evidence:"probable", onset:"chronic", timing_note:null },

  // ── COLCHICINE ──
  { drug:"Colchicine", drug_aliases:["colchicine","colcrys"],
    nutrient:"Vitamin B12", nutrient_aliases:["b12","cobalamin","cyanocobalamin"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Colchicine causes dose-dependent enterocyte damage in the ileum, impairing the ileal receptor (cubam) responsible for intrinsic factor-B12 complex absorption.",
    effect:"B12 malabsorption with long-term use; risk of B12 deficiency neuropathy and anemia.",
    management:"Monitor B12 levels in patients on long-term colchicine. Supplement if deficient.",
    evidence:"established", onset:"chronic", timing_note:null },

  // ── NIACIN ──
  { drug:"Niacin (High Dose)", drug_aliases:["niacin","nicotinic acid","niaspan","extended-release niacin","b3 high dose"],
    nutrient:"Blood Glucose / Diabetes Medications", nutrient_aliases:["metformin","insulin","glucose","glycemic control","diabetes medications"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"pharmacodynamic",
    mechanism:"High-dose nicotinic acid (≥1g/day) impairs insulin-mediated glucose uptake and increases hepatic glucose output, raising blood glucose.",
    effect:"Worsened glycemic control in diabetics; may require adjustment of antidiabetic medications.",
    management:"Monitor blood glucose closely when starting high-dose niacin in diabetics. May require dose adjustment of antidiabetic medications.",
    evidence:"established", onset:"chronic", timing_note:null },

  // ── VITAMIN E ──
  { drug:"Vitamin E (High Dose)", drug_aliases:["vitamin e","tocopherol","alpha tocopherol","vit e","high dose vitamin e"],
    nutrient:"Vitamin K / Anticoagulants", nutrient_aliases:["warfarin","vitamin k","anticoagulant","coumadin"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"pharmacodynamic",
    mechanism:"High-dose vitamin E (>400 IU/day) inhibits vitamin K-dependent carboxylation of clotting factors and inhibits platelet aggregation.",
    effect:"Enhanced anticoagulant and antiplatelet effect; increased bleeding risk.",
    management:"Limit vitamin E to ≤200 IU/day with anticoagulant therapy. Monitor INR. Avoid high-dose vitamin E before surgery.",
    evidence:"probable", onset:"chronic", timing_note:null },

  // ── FOLATE (as nutrient) ──
  { drug:"Folate / Folic Acid", drug_aliases:["folate","folic acid","b9","5-mthf","methylfolate","l-methylfolate","vitamin b9"],
    nutrient:"Methotrexate", nutrient_aliases:["methotrexate","mtx"],
    severity:"moderate", direction:"nutrient_affects_drug", type:"pharmacodynamic",
    mechanism:"Folate supplementation replenishes the folate pool depleted by methotrexate's DHFR inhibition, reducing GI and hematological toxicity.",
    effect:"Reduced methotrexate toxicity (mucositis, GI side effects, hepatotoxicity, anemia). Does not significantly reduce therapeutic efficacy at rheumatologic doses.",
    management:"BENEFICIAL: Routine folate supplementation is standard of care with MTX. Take on non-MTX days (or daily except MTX day).",
    evidence:"established", onset:"chronic", timing_note:"Take on non-methotrexate days" },

  // ── MAGNESIUM (as nutrient) ──
  { drug:"Magnesium", drug_aliases:["magnesium","mg","magnesium citrate","magnesium glycinate","magnesium oxide","magnesium malate","magnesium threonate"],
    nutrient:"Antibiotics (Fluoroquinolones / Tetracyclines)", nutrient_aliases:["ciprofloxacin","levofloxacin","doxycycline","tetracycline","fluoroquinolone"],
    severity:"major", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Magnesium forms chelate complexes with fluoroquinolones and tetracyclines in the GI tract, reducing antibiotic absorption dramatically.",
    effect:"Antibiotic treatment failure due to poor bioavailability.",
    management:"Separate magnesium supplements from fluoroquinolones by 2 hours before or 6 hours after; from tetracyclines by 2–4 hours.",
    evidence:"established", onset:"acute", timing_note:"Separate by 2–6 hours depending on antibiotic class" },

  { drug:"Magnesium", drug_aliases:["magnesium","mg","magnesium citrate","magnesium glycinate","magnesium oxide"],
    nutrient:"Bisphosphonates", nutrient_aliases:["alendronate","risedronate","fosamax","actonel"],
    severity:"moderate", direction:"drug_affects_nutrient", type:"absorption",
    mechanism:"Magnesium chelates bisphosphonates in the GI tract, significantly reducing their already-poor oral bioavailability.",
    effect:"Reduced bisphosphonate absorption and osteoporosis treatment efficacy.",
    management:"Separate magnesium (and any other mineral supplements) from bisphosphonates by at least 2 hours.",
    evidence:"established", onset:"acute", timing_note:"Take bisphosphonate on empty stomach with water; delay all supplements" },
];

// ── Search index ──
function normalizeQuery(q) {
  return q.toLowerCase().replace(/[^a-z0-9 ]/g,' ').trim();
}

function tokenScore(text, queryTokens) {
  const t = normalizeQuery(String(text||''));
  let score = 0;
  for (const tok of queryTokens) {
    if (t === tok) score += 10;
    else if (t.startsWith(tok)) score += 5;
    else if (t.includes(tok)) score += 3;
  }
  return score;
}

function searchInteractions(rawQuery) {
  const norm = normalizeQuery(rawQuery);
  const tokens = norm.split(' ').filter(t => t.length > 1);

  return DB
    .map(ix => {
      const drugScore = Math.max(
        tokenScore(ix.drug, tokens),
        ...(ix.drug_aliases||[]).map(a => tokenScore(a, tokens))
      );
      const nutScore = Math.max(
        tokenScore(ix.nutrient, tokens),
        ...(ix.nutrient_aliases||[]).map(a => tokenScore(a, tokens))
      );
      const best = Math.max(drugScore, nutScore);
      return { ix, score: best };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const sevOrder = { major:0, moderate:1, minor:2, informational:3 };
      return (sevOrder[a.ix.severity]??4) - (sevOrder[b.ix.severity]??4);
    })
    .map(r => r.ix);
}
