import {
  // Medical & Anatomy
  Activity,
  Heart,
  HeartPulse,
  Syringe,
  Pill,
  Thermometer,
  ThermometerSnowflake,
  Stethoscope,
  Brain,
  Bone,
  Eye,
  Ear,
  Lungs, // Note: Lungs doesn't exist in Lucide, mapped to Wind in usage files. We export Wind as IconLungs here for clarity.
  Wind, 
  CloudFog,
  Droplet,
  Flame,
  Zap,
  Waves,
  
  // Clinical Action
  Bandage,
  BedDouble,
  Accessibility,
  PersonStanding,
  Baby,
  Stretcher, // Not in Lucide, usually Bed or variants
  Ambulance, 
  Siren,
  
  // UI & General
  Check,
  CheckCircle,
  CheckCircle2,
  X,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  HelpCircle,
  Phone,
  Bell,
  Clock,
  Calendar,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Menu,
  MoreVertical,
  Settings,
  User,
  Users,
  UserCheck,
  FileText,
  FileBarChart,
  Folder,
  BookOpen,
  Library,
  GraduationCap,
  PlayCircle,
  Image as ImageIcon,
  Calculator,
  ArrowRightCircle,
  Pipette,
  Layers,
  Globe2,
  Microscope,
  Dna,
  Atom,
  Scissors,
  Utensils
} from "lucide-react";

/**
 * 🏥 CATALOGO CENTRAL DE ICONOS
 * Centraliza todos los iconos de la aplicación.
 * Para cambiar un icono en TODA la app, cámbialo aquí.
 */

// Mapping Logical Names to Lucide Icons
export const AppIcons = {
  // Brand
  Logo: Activity,

  // Anatomy
  Heart: Heart,
  Lungs: Wind, // Semantic mapping
  Brain: Brain,
  Bone: Bone,
  Eye: Eye,
  Ear: Ear,
  Blood: Droplet,
  DNA: Dna,
  Atom: Atom,
  Microscope: Microscope,

  // Clinical Items
  Pill: Pill,
  Syringe: Syringe,
  Stethoscope: Stethoscope,
  Thermometer: Thermometer,
  Cold: ThermometerSnowflake,
  Bandage: Bandage,
  Bed: BedDouble,
  Wheelchair: Accessibility,
  Walker: PersonStanding,
  Baby: Baby,
  Ambulance: Ambulance,
  Siren: Siren,
  Phone: Phone,
  Bell: Bell,
  Pipette: Pipette,
  Calculator: Calculator,
  Scissors: Scissors,
  Food: Utensils,

  // Vitals
  Pulse: Activity,
  ECG: HeartPulse,
  O2: CloudFog,
  Energy: Zap,
  Fire: Flame,
  Water: Waves,
  
  // Status
  Check: CheckCircle2,
  Error: XCircle,
  Warning: AlertTriangle,
  Info: Info,
  Help: HelpCircle,
  Time: Clock,
  Calendar: Calendar,

  // UI
  ArrowRight: ChevronRight,
  ArrowLeft: ChevronLeft,
  ArrowDown: ChevronDown,
  ArrowUp: ChevronUp,
  Search: Search,
  Filter: Filter,
  Menu: Menu,
  Settings: Settings,
  More: MoreVertical,
  User: User,
  Users: Users,
  UserCheck: UserCheck,
  
  // Content
  File: FileText,
  Chart: FileBarChart,
  Folder: Folder,
  Book: BookOpen,
  Library: Library,
  Education: GraduationCap,
  Start: PlayCircle,
  Image: ImageIcon,
  Layer: Layers,
  World: Globe2,
  ArrowLong: ArrowRightCircle,
};

export default AppIcons;
