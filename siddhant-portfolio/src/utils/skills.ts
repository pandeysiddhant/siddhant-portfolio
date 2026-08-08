// TODO
export const skillCategories = [
  {
    category: 'Cloud & Platform',
    skills: [
      { name: 'Azure', icon: 'azure' },
      { name: 'Databricks', icon: 'databricks' },
      { name: 'ADLS Gen2', icon: 'storage' },
      { name: 'Azure Data Factory', icon: 'factory' },
      { name: 'Unity Catalog', icon: 'catalog' },
      { name: 'Event Hubs', icon: 'eventhub' },
    ],
  },
  {
    category: 'Languages & Processing',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'PySpark', icon: 'spark' },
      { name: 'Scala', icon: 'scala' },
      { name: 'SQL / Spark SQL', icon: 'sql' },
      { name: 'Java', icon: 'java' },
    ],
  },
  {
    category: 'Engineering & Ops',
    skills: [
      { name: 'Delta Live Tables', icon: 'dlt' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Git / Bitbucket', icon: 'git' },
      { name: 'CI/CD Pipelines', icon: 'cicd' },
      { name: 'Cucumber (BDD)', icon: 'cucumber' },
      { name: 'REST APIs', icon: 'api' },
    ],
  },
  {
    category: 'Concepts',
    skills: [
      { name: 'Medallion Architecture', icon: 'medallion' },
      { name: 'Data Warehousing', icon: 'warehouse' },
      { name: 'Streaming / Batch', icon: 'stream' },
      { name: 'RBAC / Governance', icon: 'rbac' },
      { name: 'Cost Optimization', icon: 'cost' },
    ],
  },
];

// Helper to flatten for "All Skills" view
export const allSkills = skillCategories.flatMap(c => c.skills);