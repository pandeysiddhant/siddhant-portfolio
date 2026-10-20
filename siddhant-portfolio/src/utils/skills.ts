export const skillCategories = [
  {
    category: 'Cloud & Data Platforms',
    skills: [
      { name: 'Azure', icon: 'azure' },
      { name: 'Databricks', icon: 'databricks' },
      { name: 'ADLS Gen2', icon: 'storage' },
      { name: 'Azure Blob Storage', icon: 'storage' },
      { name: 'Azure Data Factory', icon: 'factory' },
      { name: 'Unity Catalog', icon: 'catalog' },
      { name: 'Event Hubs', icon: 'eventhub' },
      { name: 'Azure SQL Database', icon: 'sql' },
      { name: 'Azure Key Vault', icon: 'keyvault' },
      { name: 'Active Directory', icon: 'identity' },
      { name: 'Private Endpoints', icon: 'network' },
    ],
  },
  {
    category: 'Languages & Processing',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'PySpark', icon: 'spark' },
      { name: 'Scala', icon: 'scala' },
      { name: 'SQL', icon: 'sql' },
      { name: 'Spark SQL', icon: 'sql' },
      { name: 'Apache Spark', icon: 'spark' },
    ],
  },
  {
    category: 'Engineering, Testing & Delivery',
    skills: [
      { name: 'Delta Live Tables', icon: 'dlt' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'GitHub Actions', icon: 'cicd' },
      { name: 'Git', icon: 'git' },
      { name: 'Bitbucket', icon: 'git' },
      { name: 'CI/CD Pipelines', icon: 'cicd' },
      { name: 'Cucumber (BDD)', icon: 'cucumber' },
      { name: 'Pytest', icon: 'pytest' },
      { name: 'SSMS', icon: 'sql' },
      { name: 'REST APIs', icon: 'api' },
    ],
  },
  {
    category: 'Data Practices & Collaboration',
    skills: [
      { name: 'ETL / ELT', icon: 'etl' },
      { name: 'Medallion Architecture', icon: 'medallion' },
      { name: 'Data Warehousing', icon: 'warehouse' },
      { name: 'Streaming / Batch', icon: 'stream' },
      { name: 'RBAC / Governance', icon: 'rbac' },
      { name: 'Atlassian Jira', icon: 'jira' },
      { name: 'Confluence', icon: 'confluence' },
      { name: 'Generative AI', icon: 'ai' },
    ],
  },
];

// Helper to flatten for "All Skills" view
export const allSkills = skillCategories.flatMap(c => c.skills);