// This simulates the BCP API data and contains test data needed for the app to function.
const BeachList = [
  {
    id: "0",
    title: "Alum Chine",
    congestion: "High",
    latLng: {
      latitude: 50.7113408,
      longitude: -1.8966187,
    },
    pollygon: [
      { latitude: 50.712031, longitude: -1.893615 },
      { latitude: 50.711583, longitude: -1.893358 },
      { latitude: 50.708906, longitude: -1.901475 },
      { latitude: 50.709531, longitude: -1.901947 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "1",
    title: "Highcliffe Beach ",
    congestion: "Low",
    latLng: {
      latitude: 50.736798,
      longitude: -1.702858,
    },
    pollygon: [
      { latitude: 50.737623, longitude: -1.69118 },
      { latitude: 50.737039, longitude: -1.691159 },
      { latitude: 50.736727, longitude: -1.694807 },
      { latitude: 50.736623, longitude: -1.704508 },
      { latitude: 50.735984, longitude: -1.711138 },
      { latitude: 50.736731, longitude: -1.711117 },
      { latitude: 50.737247, longitude: -1.704697 },
      { latitude: 50.737613, longitude: -1.691254 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "2",
    title: "Highcliffe Castle",
    congestion: "Low",
    latLng: {
      latitude: 50.7381,
      longitude: -1.7139,
    },
    pollygon: [
      { latitude: 50.736731, longitude: -1.711117 },
      { latitude: 50.735984, longitude: -1.711138 },
      { latitude: 50.734522, longitude: -1.722115 },
      { latitude: 50.734811, longitude: -1.722297 },
      { latitude: 50.735707, longitude: -1.718646 },
      { latitude: 50.736605, longitude: -1.711145 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "3",
    title: "Avon Beach",
    congestion: "Low",
    latLng: {
      latitude: 50.7293,
      longitude: -1.7343,
    },
    pollygon: [
      { latitude: 50.732854, longitude: -1.727711 },
      { latitude: 50.731944, longitude: -1.729782 },
      { latitude: 50.730686, longitude: -1.731801 },
      { latitude: 50.728887, longitude: -1.734054 },
      { latitude: 50.728574, longitude: -1.733969 },
      { latitude: 50.72708, longitude: -1.735707 },
      { latitude: 50.725559, longitude: -1.739033 },
      { latitude: 50.726034, longitude: -1.739419 },
      { latitude: 50.728615, longitude: -1.735278 },
      { latitude: 50.730472, longitude: -1.733234 },
      { latitude: 50.732288, longitude: -1.730172 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "4",
    title: "Boscombe Beach East",
    congestion: "Low",
    latLng: {
      latitude: 50.720064,
      longitude: -1.837489,
    },
    pollygon: [
      { latitude: 50.72074, longitude: -1.833311 },
      { latitude: 50.720007, longitude: -1.833268 },
      { latitude: 50.719356, longitude: -1.84304 },
      { latitude: 50.719994, longitude: -1.843126 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "5",
    title: "Boscombe Beach West",
    congestion: "Med",
    latLng: {
      latitude: 50.719462,
      longitude: -1.848153,
    },
    pollygon: [
      { latitude: 50.719994, longitude: -1.843126 },
      { latitude: 50.719356, longitude: -1.84304 },
      { latitude: 50.718554, longitude: -1.854081 },
      { latitude: 50.719261, longitude: -1.854039 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "6",
    title: "Bournemouth Beach East",
    congestion: "Med",
    latLng: {
      latitude: 50.716602,
      longitude: -1.871478,
    },
    pollygon: [
      { latitude: 50.717631, longitude: -1.868158 },
      { latitude: 50.716734, longitude: -1.868458 },
      { latitude: 50.715536, longitude: -1.875382 },
      { latitude: 50.716269, longitude: -1.875703 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "7",
    title: "Bournemouth Beach West",
    congestion: "High",
    latLng: {
      latitude: 50.715252,
      longitude: -1.878491,
    },
    pollygon: [
      { latitude: 50.716269, longitude: -1.875703 },
      { latitude: 50.715536, longitude: -1.875382 },
      { latitude: 50.714447, longitude: -1.880987 },
      { latitude: 50.715099, longitude: -1.881351 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "8",
    title: "Branksome Chine",
    congestion: "Med",
    latLng: {
      latitude: 50.705507,
      longitude: -1.910963,
    },
    pollygon: [
      { latitude: 50.707727, longitude: -1.906616 },
      { latitude: 50.707156, longitude: -1.906251 },
      { latitude: 50.70299, longitude: -1.915354 },
      { latitude: 50.703643, longitude: -1.915998 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "9",
    title: "Branksome Dene Chine",
    congestion: "Low",
    latLng: {
      latitude: 50.708589,
      longitude: -1.90333,
    },
    pollygon: [
      { latitude: 50.709531, longitude: -1.901947 },
      { latitude: 50.708906, longitude: -1.901475 },
      { latitude: 50.707156, longitude: -1.906251 },
      { latitude: 50.707727, longitude: -1.906616 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "10",
    title: "Canford Cliffs",
    congestion: "Low",
    latLng: {
      latitude: 50.701028,
      longitude: -1.920063,
    },
    pollygon: [
      { latitude: 50.703643, longitude: -1.915998 },
      { latitude: 50.70299, longitude: -1.915354 },
      { latitude: 50.698598, longitude: -1.923186 },
      { latitude: 50.698951, longitude: -1.923808 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "11",
    title: "Durley Chine",
    congestion: "Med",
    latLng: {
      latitude: 50.713036,
      longitude: -1.888904,
    },
    pollygon: [
      { latitude: 50.715099, longitude: -1.881351 },
      { latitude: 50.714447, longitude: -1.880987 },
      { latitude: 50.712465, longitude: -1.890387 },
      { latitude: 50.712852, longitude: -1.890666 },
      { latitude: 50.714093, longitude: -1.885653 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "12",
    title: "East Cliff",
    congestion: "Low",
    latLng: {
      latitude: 50.718087,
      longitude: -1.860985,
    },
    pollygon: [
      { latitude: 50.719261, longitude: -1.854039 },
      { latitude: 50.718554, longitude: -1.854081 },
      { latitude: 50.716734, longitude: -1.868458 },
      { latitude: 50.717631, longitude: -1.868158 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "13",
    title: "Fishermans Walk",
    congestion: "Med",
    latLng: {
      latitude: 50.720796,
      longitude: -1.817398,
    },
    pollygon: [
      { latitude: 50.721095, longitude: -1.806534 },
      { latitude: 50.720225, longitude: -1.806749 },
      { latitude: 50.720327, longitude: -1.824644 },
      { latitude: 50.721033, longitude: -1.824687 },
      { latitude: 50.721115, longitude: -1.806663 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "14",
    title: "Flaghead Chine",
    congestion: "Med",
    latLng: {
      latitude: 50.697677,
      longitude: -1.924993,
    },
    pollygon: [
      { latitude: 50.698951, longitude: -1.923808 },
      { latitude: 50.698598, longitude: -1.923186 },
      { latitude: 50.696251, longitude: -1.926441 },
      { latitude: 50.697039, longitude: -1.92732 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "15",
    title: "Friars Cliff",
    congestion: "Low",
    latLng: {
      latitude: 50.733592,
      longitude: -1.726096,
    },
    pollygon: [
      { latitude: 50.734811, longitude: -1.722297 },
      { latitude: 50.734522, longitude: -1.722115 },
      { latitude: 50.734067, longitude: -1.724106 },
      { latitude: 50.733433, longitude: -1.725998 },
      { latitude: 50.732854, longitude: -1.727711 },
      { latitude: 50.731944, longitude: -1.729782 },
      { latitude: 50.732345, longitude: -1.730083 },
      { latitude: 50.733764, longitude: -1.726488 },
      { latitude: 50.734796, longitude: -1.722368 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "16",
    title: "Manor Steps",
    congestion: "Low",
    latLng: {
      latitude: 50.720671,
      longitude: -1.827959,
    },
    pollygon: [
      { latitude: 50.721033, longitude: -1.824687 },
      { latitude: 50.720327, longitude: -1.824644 },
      { latitude: 50.720007, longitude: -1.833268 },
      { latitude: 50.72074, longitude: -1.833311 },
      { latitude: 50.721039, longitude: -1.824857 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "17",
    title: "Middle Chine",
    congestion: "Low",
    latLng: {
      latitude: 50.712226,
      longitude: -1.892188,
    },
    pollygon: [
      { latitude: 50.712852, longitude: -1.890666 },
      { latitude: 50.712465, longitude: -1.890387 },
      { latitude: 50.711583, longitude: -1.893358 },
      { latitude: 50.712031, longitude: -1.893615 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "18",
    title: "Mudeford Quay",
    congestion: "Low",
    latLng: {
      latitude: 50.72418,
      longitude: -1.741217,
    },
    pollygon: [
      { latitude: 50.726034, longitude: -1.739419 },
      { latitude: 50.725559, longitude: -1.739033 },
      { latitude: 50.723316, longitude: -1.742155 },
      { latitude: 50.724213, longitude: -1.742885 },
      { latitude: 50.725612, longitude: -1.742005 },
      { latitude: 50.726373, longitude: -1.740932 },
      { latitude: 50.726074, longitude: -1.739516 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "19",
    title: "Mudeford Sandpit",
    congestion: "Low",
    latLng: {
      latitude: 50.717746,
      longitude: -1.743342,
    },
    pollygon: [
      { latitude: 50.723969, longitude: -1.740117 },
      { latitude: 50.722583, longitude: -1.74016 },
      { latitude: 50.719621, longitude: -1.741318 },
      { latitude: 50.714133, longitude: -1.745224 },
      { latitude: 50.712475, longitude: -1.7487 },
      { latitude: 50.712638, longitude: -1.749344 },
      { latitude: 50.71454, longitude: -1.746254 },
      { latitude: 50.717421, longitude: -1.744623 },
      { latitude: 50.722393, longitude: -1.742906 },
      { latitude: 50.723941, longitude: -1.740246 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "20",
    title: "Sandbanks",
    congestion: "Low",
    latLng: {
      latitude: 50.688612,
      longitude: -1.937075,
    },
    pollygon: [
      { latitude: 50.694973, longitude: -1.930303 },
      { latitude: 50.693954, longitude: -1.92893 },
      { latitude: 50.691022, longitude: -1.933317 },
      { latitude: 50.686688, longitude: -1.938216 },
      { latitude: 50.684666, longitude: -1.941183 },
      { latitude: 50.683332, longitude: -1.943407 },
      { latitude: 50.682722, longitude: -1.945742 },
      { latitude: 50.683456, longitude: -1.946729 },
      { latitude: 50.684414, longitude: -1.943549 },
      { latitude: 50.687258, longitude: -1.939978 },
      { latitude: 50.690487, longitude: -1.93574 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "21",
    title: "Shore Road",
    congestion: "Low",
    latLng: {
      latitude: 50.694992,
      longitude: -1.928654,
    },
    pollygon: [
      { latitude: 50.697039, longitude: -1.92732 },
      { latitude: 50.696251, longitude: -1.926441 },
      { latitude: 50.693954, longitude: -1.92893 },
      { latitude: 50.694973, longitude: -1.930303 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "22",
    title: "Solent Beach",
    congestion: "Low",
    latLng: {
      latitude: 50.716353,
      longitude: -1.766942,
    },
    pollygon: [
      { latitude: 50.712475, longitude: -1.7487 },

      { latitude: 50.711004, longitude: -1.748831 },
      { latitude: 50.71383, longitude: -1.755784 },
      { latitude: 50.715332, longitude: -1.762171 },
      { latitude: 50.716256, longitude: -1.767879 },
      { latitude: 50.717788, longitude: -1.784244 },
      { latitude: 50.718631, longitude: -1.783631 },
      { latitude: 50.716883, longitude: -1.767757 },
      { latitude: 50.71599, longitude: -1.762077 },
      { latitude: 50.7145, longitude: -1.755326 },
      { latitude: 50.712638, longitude: -1.749344 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
  {
    id: "23",
    title: "Southbourne Beach",
    congestion: "Low",
    latLng: {
      latitude: 50.719103,
      longitude: -1.792902,
    },
    pollygon: [
      { latitude: 50.718631, longitude: -1.783631 },
      { latitude: 50.717788, longitude: -1.784244 },
      { latitude: 50.720225, longitude: -1.806749 },
      { latitude: 50.721095, longitude: -1.806534 },
    ],
    cardInfo: {
      Lifeguarded: "No",
      PublicToilets: "Yes",
      DogsMayExercise: "Permitted",
      CyclingPermited: "Permitted",
      BBQs: "Permitted",
    },
  },
];

export default BeachList;
