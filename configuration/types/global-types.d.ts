type MantineDemoControlType = 'boolean' | 'color' | 'select' | 'string' | 'size' | 'number';

interface MantineDemoControlProps {
  type: MantineDemoControlType;
  name: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

interface MantineDemo {
  type: 'configurator' | 'demo';
  component: React.FC;
  wrapper?: React.FC;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
  demoProps?: {
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
  };
  configurator?: MantineDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean;
    includeCode?: boolean;
  };
  codeTemplate?(props: string, children?: string): string;
}

interface Frontmatter {
  title: string;
  description?: string;
  props: string[];
  import: string;
  docs: string;
  source: string;
  package: string;
  bundleSize: string;
  installation: string;
  pageTitle: string;
  license: string;
}

interface MdxPage {
  headings: {
    depth: number;
    value: string;
  }[];

  body: string;

  frontmatter: Frontmatter;
}
