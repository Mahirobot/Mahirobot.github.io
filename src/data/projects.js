// TODO Add a couple lines about each project
const data = [
  {
    title: 'Automatic detection and recognition of Bengali Handwritten texts.',
    subtitle: 'Bachelor\'s thesis',
    image: '/images/projects/HBD.png',
    date: '2021-11-20',
    desc:
      'Built a pipeline that takes in pdf/images of Bengali handwritten texts and gives a text file with digitized version of the text as output.'
      + ' Collected and annotated a dataset with 303 documents.'
      + ' Implemented image pre-processing, line segmentation, removal of overlapping lines, word detection and finally word recognition,'
      + ' Achieved a recognition accuracy of 76%.',
  },
  {
    title: 'KiTs19 Challenge: Segmentation of kidney and kidney tumor',
    subtitle: 'Academic project',
    link: 'https://github.com/Mahirobot/kits-19-Kidney-and-Tumor-Segmentation-dump',
    image: '/images/projects/kits19.gif',
    date: '2020-12-12',
    desc:
      'Proposed a loss function that improves the segmentation result. '
      + 'Images are in NifTI format. '
      + 'Conducted multiple experiments, each using various techniques and different loss functions. '
      + 'Model used: 3D Unet',
  },
  {
    title: 'Covid cases in Bangladesh',
    subtitle: 'Visualization of the spread of Covid in Bangladesh.',
    link: 'https://github.com/Mahirobot/Covid_cases-Bangladesh',
    image: '/images/projects/covid_bd.gif',
    date: '2020-09-20',
    desc:
      'I scraped the population data and covid data for each region from the web. '
      + 'I also fixed issues with the geojson map of Bangladesh that was available. '
      + 'The data is available in my github page.',
  },
];

export default data;
