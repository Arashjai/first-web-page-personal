export type Locale = "en" | "fa";
export type L10n<T = string> = { en: T; fa: T };
export type SkillStatus = "learning" | "familiar" | "proficient";
export interface Skill { n: L10n; s?: SkillStatus }
export interface SkillGroup { t: L10n; description?: L10n; items: Skill[] }
export interface Experience {
  role: L10n; org: L10n; start: string; end: string; dur: L10n; desc: L10n; resp: L10n<string[]>; skills: string[];
}
export interface Education { field: L10n; institution: L10n }
export interface Category { id: string; en: string; fa: string }
export interface Project {
  slug: string; cat: string; name: L10n; desc: L10n; tech?: string[]; github?: string; demo?: string; status?: L10n;
}
export interface Data {
  goals: L10n<string[]>; expertise: L10n<string[]>; skills: SkillGroup[]; experience: Experience[]; education: Education[];
  categories: Category[]; projects: Project[];
}
