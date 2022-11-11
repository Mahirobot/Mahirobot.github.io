// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 4,
    category: ['Machine Learning', 'API', 'Languages', 'Data Engineering', 'Data Science', 'Machine Learning'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Database', 'Javascript'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Language', 'Data Structures', 'Problem Solving'],
  },
  {
    title: 'C',
    competency: 1,
    category: ['Language'],
  },
  {
    title: 'Amazon Web Services',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'NumPy',
    competency: 4,
    category: ['Python', 'Data Engineering', 'Data Science', 'Machine Learning'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering', 'Databases', 'Data Engineering', 'Data Science', 'Machine Learning'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'API', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'API', 'Python'],
  },
  {
    title: 'mqtt',
    competency: 3,
    category: ['API', 'IoT'],
  },
  {
    title: 'Selenium',
    competency: 3,
    category: ['Web Scraping', 'Software Testing', ''],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Pytorch',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Data scraping',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Computer Vision',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Natural Language Processing',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Locust',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'AutoCAD',
    competency: 3,
    category: ['Software'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Mypy',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'flake8',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Problem Solving',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Presentation',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Public Speaking',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Work Ethic',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Leadership',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Language proficienct - Bangla',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Language proficienct - English',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Data Structures',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Machine Learning',
    competency: 3,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Competitive Programming',
    competency: 3,
    category: ['C++', 'Python', 'Problem Solving'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
