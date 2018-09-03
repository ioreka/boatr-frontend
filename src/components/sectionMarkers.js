
const sectionMarkers = [

 { lat: 51.74518, lng: -0.5015 },
 { lat: 51.74427, lng: -0.48773 },
 { lat: 51.74262, lng: -0.47318 },
 { lat: 51.73611, lng: -0.46348 },
 { lat: 51.72993, lng: -0.45404 },
 { lat: 51.72173, lng: -0.44958 },
 { lat: 51.71389, lng: -0.44443 },
 { lat: 51.70541, lng: -0.44207 },
 { lat: 51.6974, lng: -0.43636 },
 { lat: 51.68849, lng: -0.43365 },
 { lat: 51.68067, lng: -0.43048 },
 { lat: 51.67436, lng: -0.42559 },
 { lat: 51.66576, lng: -0.42713 },
 { lat: 51.65711, lng: -0.42778 },
 { lat: 51.64944, lng: -0.42999 },
 { lat: 51.64398, lng: -0.44106 },
 { lat: 51.63793, lng: -0.45136 },
 { lat: 51.63505, lng: -0.46447 },
 { lat: 51.63156, lng: -0.477 },
 { lat: 51.62798, lng: -0.48983 },
 { lat: 51.62105, lng: -0.49586 },
 { lat: 51.61191, lng: -0.49801 },
 { lat: 51.60354, lng: -0.49642 },
 { lat: 51.59617, lng: -0.48912 },
 { lat: 51.58737, lng: -0.48599 },
 { lat: 51.5781, lng: -0.4835 },
 { lat: 51.56941, lng: -0.48155 },
 { lat: 51.56061, lng:  -0.4823 },
 { lat: 51.55208, lng: -0.48354 },
 { lat: 51.54342, lng: -0.48814 },
 { lat: 51.53444, lng: -0.48758 },
 { lat: 51.52875, lng: -0.48567 },
 { lat: 51.52022, lng: -0.48301 },
 { lat: 51.51531, lng: -0.49382 },
 { lat: 51.51269, lng: -0.50889 },
 { lat: 51.51053, lng: -0.52206 },
 { lat: 51.50989, lng: -0.53605 },
 { lat: 51.50919, lng: -0.55038 },
 { lat: 51.5105, lng: -0.56472 },
 { lat: 51.51405, lng: -0.57759 },
 { lat: 51.51272, lng: -0.47575 },
 { lat: 51.50951, lng: -0.46327 },
 { lat: 51.50772, lng: -0.44867 },
 { lat: 51.50868, lng: -0.43498 },
 { lat: 51.50564, lng: -0.4219 },
 { lat: 51.50059, lng: -0.41001 },
 { lat: 51.49706, lng: -0.39666 },
 { lat: 51.49525, lng: -0.38194 },
 { lat: 51.49928, lng: -0.37044 },
 { lat: 51.50366, lng: -0.35808 },
 { lat: 51.50313, lng: -0.34246 },
 { lat: 51.49805, lng: -0.3377 },
 { lat: 51.49201, lng: -0.32843 },
 { lat: 51.4871, lng: -0.31933 },
 { lat: 51.48173, lng: -0.31242 },
 { lat: 51.48303, lng: -0.29989 },
 { lat: 51.50529, lng: -0.39778 },
 { lat: 51.51309, lng: -0.39052 },
 { lat: 51.51979, lng: -0.38108 },
 { lat: 51.52818, lng: -0.37645 },
 { lat: 51.53555, lng: -0.36954 },
 { lat: 51.54187, lng: -0.36387 },
 { lat: 51.54569, lng: -0.35254 },
 { lat: 51.54606, lng: -0.34023 },
 { lat: 51.54163, lng: -0.3301 },
 { lat: 51.54351, lng: -0.31716 },
 { lat: 51.54102, lng: -0.3066 },
 { lat: 51.53846, lng: -0.2933 },
 { lat: 51.53786, lng: -0.28139 },
 { lat: 51.53585, lng: -0.26892 },
 { lat: 51.53276, lng: -0.25526 },
 { lat: 51.52767, lng: -0.24451 },
 { lat: 51.52607, lng: -0.23215 },
 { lat: 51.5272, lng: -0.21867 },
 { lat: 51.5255, lng: -0.20575 },
 { lat: 51.52216, lng: -0.19339 },
 { lat: 51.52169, lng: -0.1856 },
 { lat: 51.52634, lng: -0.17196 },
 { lat: 51.53712, lng: -0.15312 },
 { lat: 51.5411, lng: -0.14157 },
 { lat: 51.5372, lng: -0.1299 },
 { lat: 51.53513, lng: -0.11818 },
 { lat: 51.53516, lng: -0.09128 },
 { lat: 51.5366, lng: -0.07761 },
 { lat: 51.53553, lng: -0.06242 },
 { lat: 51.53427, lng: -0.05081 },
 { lat: 51.52815, lng: -0.04061 },
 { lat: 51.51962, lng: -0.03634 },
 { lat: 51.53679, lng: -0.0325 },
 { lat: 51.53814, lng: -0.02074 },
 { lat: 51.54468, lng: -0.02248 },
 { lat: 51.55204, lng: -0.03068 },
 { lat: 51.55885, lng:  -0.03931},
 { lat: 51.56485, lng: -0.04729 },
 { lat: 51.57114, lng: -0.05669 },
 { lat: 51.57936, lng: -0.06214 },
 { lat: 51.58666, lng: -0.05647 },
 { lat: 51.59706, lng: -0.05081 },
 { lat: 51.61087, lng: -0.04094 },
 { lat: 51.62004, lng: -0.03579 },
 { lat: 51.62771, lng: -0.03175 },
 { lat: 51.63693, lng: -0.03089 },
 { lat: 51.64553, lng: -0.0272 },
 { lat: 51.65485, lng: -0.02047 },
 { lat: 51.66201, lng: -0.02047 },
 { lat: 51.67074, lng: -0.0175 },
 { lat: 51.67801, lng: -0.01205 },
 { lat: 51.687, lng: -0.01193 },
 { lat: 51.70355, lng: -0.01965 },
 { lat: 51.71221, lng: -0.01643 },
 { lat: 51.72144, lng: -0.01441 },
 { lat: 51.72992, lng: -0.01368 },
 { lat: 51.73922, lng: -0.01313 },
 { lat: 51.74199, lng: -0.00497 }

]

export default sectionMarkers
