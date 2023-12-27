// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 4,
    category: ['Coding', 'Software', 'Machine Learning', 'Deep Learning', 'Data Science', 'Problem Solving'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Coding', 'Database'],
  },
  {
    title: 'mongoDB',
    competency: 3,
    category: ['Database'],
  },
  {
    title: 'Firebase',
    competency: 2,
    category: ['Database'],
  },
  {
    title: 'noSQL',
    competency: 3,
    category: ['Coding', 'Database'],
  },
  {
    title: 'postgreSQL',
    competency: 3,
    category: ['Coding', 'Database'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Coding', 'Problem Solving'],
  },
  {
    title: 'C',
    competency: 2,
    category: ['Coding'],
  },
  {
    title: 'Amazon Web Services',
    competency: 1,
    category: ['Cloud', 'Software', 'Tools'],
  },
  {
    title: 'NumPy',
    competency: 4,
    category: ['Tools', 'Coding', 'Data Science', 'Machine Learning', 'Deep Learning'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Tools', 'Coding', 'Data Science', 'Machine Learning', 'Deep Learning'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'API', 'Software'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'API', 'Software'],
  },
  {
    title: 'mqtt',
    competency: 3,
    category: ['API', 'IoT'],
  },
  {
    title: 'Selenium',
    competency: 3,
    category: ['Software Testing', 'Software'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Operating System', 'Tools'],
  },
  {
    title: 'Windows',
    competency: 4,
    category: ['Operating System', 'Tools'],
  },
  {
    title: 'Git',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Pytorch',
    competency: 3,
    category: ['Tools', 'Deep Learning', 'Computer Vision', 'NLP'],
  },
  {
    title: 'Locust',
    competency: 4,
    category: ['Tools', 'Software Testing'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Tools', 'Deep Learning', 'Computer Vision'],
  },
  {
    title: 'HTML + CSS',
    competency: 2,
    category: ['Web Development', 'Coding', 'Tools'],
  },
  {
    title: 'Java',
    competency: 2,
    category: ['Coding'],
  },
  {
    title: 'AutoCAD',
    competency: 3,
    category: ['Tools', 'Software'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Coding', 'Data Science', 'Data Visualization'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Tools', 'Data Science', 'Data Visualization'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Tools', 'Data Science', 'Machine Learning'],
  },
  {
    title: 'Mypy',
    competency: 4,
    category: ['Tools', 'Coding'],
  },
  {
    title: 'flake8',
    competency: 4,
    category: ['Tools', 'Coding'],
  },
  {
    title: 'Presentation',
    competency: 4,
    category: ['Soft Skills', 'Data Visualization'],
  },
  {
    title: 'Public Speaking',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Work Ethic',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Leadership',
    competency: 3,
    category: ['Soft Skills'],
  },
  {
    title: 'Language proficiency - Bangla',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Language proficiency - English',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Data Structures',
    competency: 4,
    category: ['Coding', 'Problem Solving'],
  },
  {
    title: 'Javascript',
    competency: 1,
    category: ['Web Development', 'Tools', 'Coding'],
  },
  {
    title: 'Arduino',
    competency: 2,
    category: ['IoT', 'Hardware'],
  },
  {
    title: 'NodeMCU',
    competency: 2,
    category: ['IoT', 'Hardware'],
  },
  {
    title: 'Pillow',
    competency: 4,
    category: ['Tools', 'Deep Learning', 'Computer Vision', 'Data Visualization'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['Tools', 'Computer Vision', 'Data Visualization'],
  },
  {
    title: 'Albumentations',
    competency: 4,
    category: ['Tools','Computer Vision'],
  },
  {
    title: 'NLTK',
    competency: 4,
    category: ['Tools','NLP'],
  },
  {
    title: 'Gensim',
    competency: 3,
    category: ['Tools','NLP'],
  },
  {
    title: 'SpaCy',
    competency: 2,
    category: ['Tools','NLP'],
  },
  {
    title: 'Dynamic Programming',
    competency: 2,
    category: ['Problem Solving'],
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
