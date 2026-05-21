export type HomeScreenStyles = Record<string, any>;

export type OpenPlaceholder = (label: string) => void;

export interface HomeMaintenanceDocument {
  id: string;
  name: string;
  size: string;
  kind: 'pdf' | 'image';
}
