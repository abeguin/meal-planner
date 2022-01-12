import { Food } from "../food"
import { nanoid } from "nanoid"
import * as G from "../../units/g"
import * as Protein from "../protein"
import * as Carbohydrate from "../carbohydrate"
import * as Lipid from "../lipid"
import * as Calories from "../../units/kgCalorie"
import * as ML from "../../units/ml"

export const fetchFood = async (): Promise<Food[]> => Promise.resolve(foodFixture)

export const foodFixture: Food[] = [
  {
    id: nanoid(),
    name: "Avocat",
    quantity: G.from(100),
    protein: Protein.from(2),
    carbohydrate: Carbohydrate.from(4),
    lipid: Lipid.from(22),
    calories: Calories.from(220)
  },
  {
    id: nanoid(),
    name: "Baked beans",
    quantity: G.from(100),
    protein: Protein.from(8),
    carbohydrate: Carbohydrate.from(13),
    lipid: Lipid.from(1),
    calories: Calories.from(93)
  },
  {
    id: nanoid(),
    name: "Banane",
    quantity: G.from(100),
    protein: Protein.from(2),
    carbohydrate: Carbohydrate.from(20),
    lipid: Lipid.from(0),
    calories: Calories.from(86)
  },
  {
    id: nanoid(),
    name: "Beurre",
    quantity: G.from(100),
    protein: Protein.from(1),
    carbohydrate: Carbohydrate.from(1),
    lipid: Lipid.from(80),
    calories: Calories.from(725)
  },
  {
    id: nanoid(),
    name: "Bière",
    quantity: ML.from(100),
    protein: Protein.from(0),
    carbohydrate: Carbohydrate.from(4),
    lipid: Lipid.from(0),
    calories: Calories.from(46)
  },
  {
    id: nanoid(),
    name: "Blanc d'œuf",
    quantity: G.from(53),
    protein: Protein.from(4),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(0),
    calories: Calories.from(18)
  },
  {
    id: nanoid(),
    name: "Bœuf",
    quantity: G.from(100),
    protein: Protein.from(22),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(7),
    calories: Calories.from(151)
  },
  {
    id: nanoid(),
    name: "Broccolis",
    quantity: G.from(100),
    protein: Protein.from(3),
    carbohydrate: Carbohydrate.from(3),
    lipid: Lipid.from(0),
    calories: Calories.from(27)
  },
  {
    id: nanoid(),
    name: "Buche de chèvre",
    quantity: G.from(100),
    protein: Protein.from(19),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(25),
    calories: Calories.from(302)
  },
  {
    id: nanoid(),
    name: "Carotte crue",
    quantity: G.from(100),
    protein: Protein.from(1),
    carbohydrate: Carbohydrate.from(6),
    lipid: Lipid.from(0),
    calories: Calories.from(30)
  },
  {
    id: nanoid(),
    name: "Champignon de paris",
    quantity: G.from(100),
    protein: Protein.from(2),
    carbohydrate: Carbohydrate.from(1),
    lipid: Lipid.from(0),
    calories: Calories.from(15)
  },
  {
    id: nanoid(),
    name: "Chocolat noir",
    quantity: G.from(100),
    protein: Protein.from(6),
    carbohydrate: Carbohydrate.from(49),
    lipid: Lipid.from(31),
    calories: Calories.from(498)
  },
  {
    id: nanoid(),
    name: "Chou rouge",
    quantity: G.from(100),
    protein: Protein.from(1),
    carbohydrate: Carbohydrate.from(4),
    lipid: Lipid.from(0),
    calories: Calories.from(24)
  },
  {
    id: nanoid(),
    name: "Choux fleur",
    quantity: G.from(100),
    protein: Protein.from(1),
    carbohydrate: Carbohydrate.from(7),
    lipid: Lipid.from(0),
    calories: Calories.from(32)
  },
  {
    id: nanoid(),
    name: "Concombre",
    quantity: G.from(100),
    protein: Protein.from(1),
    carbohydrate: Carbohydrate.from(2),
    lipid: Lipid.from(0),
    calories: Calories.from(12)
  },
  {
    id: nanoid(),
    name: "Cottage cheese",
    quantity: G.from(100),
    protein: Protein.from(12),
    carbohydrate: Carbohydrate.from(4),
    lipid: Lipid.from(4),
    calories: Calories.from(100)
  },
  {
    id: nanoid(),
    name: "Crème entière",
    quantity: ML.from(100),
    protein: Protein.from(3),
    carbohydrate: Carbohydrate.from(4),
    lipid: Lipid.from(35),
    calories: Calories.from(339)
  },
  {
    id: nanoid(),
    name: "Energy Diet (1u=100g)",
    quantity: G.from(100),
    protein: Protein.from(17),
    carbohydrate: Carbohydrate.from(19),
    lipid: Lipid.from(7),
    calories: Calories.from(210)
  },
  {
    id: nanoid(),
    name: "Epinards hachés",
    quantity: G.from(100),
    protein: Protein.from(3),
    carbohydrate: Carbohydrate.from(3),
    lipid: Lipid.from(2),
    calories: Calories.from(39)
  },
  {
    id: nanoid(),
    name: "Farine",
    quantity: G.from(100),
    protein: Protein.from(10),
    carbohydrate: Carbohydrate.from(75),
    lipid: Lipid.from(2),
    calories: Calories.from(354)
  },
  {
    id: nanoid(),
    name: "Flocon avoine complets",
    quantity: G.from(100),
    protein: Protein.from(13),
    carbohydrate: Carbohydrate.from(61),
    lipid: Lipid.from(7),
    calories: Calories.from(373)
  },
  {
    id: nanoid(),
    name: "Fromage à raclette",
    quantity: G.from(100),
    protein: Protein.from(23),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(29),
    calories: Calories.from(357)
  },
  {
    id: nanoid(),
    name: "Gruyère",
    quantity: G.from(100),
    protein: Protein.from(29),
    carbohydrate: Carbohydrate.from(2),
    lipid: Lipid.from(30),
    calories: Calories.from(392)
  },
  {
    id: nanoid(),
    name: "Huile de colza",
    quantity: ML.from(100),
    protein: Protein.from(0),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(91),
    calories: Calories.from(822)
  },
  {
    id: nanoid(),
    name: "Huile olive",
    quantity: ML.from(100),
    protein: Protein.from(0),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(92),
    calories: Calories.from(828)
  },
  {
    id: nanoid(),
    name: "Jaune d'œuf (53g)",
    quantity: G.from(53),
    protein: Protein.from(3),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(6),
    calories: Calories.from(61)
  },
  {
    id: nanoid(),
    name: "Lait",
    quantity: G.from(100),
    protein: Protein.from(3),
    carbohydrate: Carbohydrate.from(5),
    lipid: Lipid.from(2),
    calories: Calories.from(46)
  },
  {
    id: nanoid(),
    name: "Mayonnaise",
    quantity: G.from(100),
    protein: Protein.from(2),
    carbohydrate: Carbohydrate.from(2),
    lipid: Lipid.from(79),
    calories: Calories.from(727)
  },
  {
    id: nanoid(),
    name: "Millet cru",
    quantity: G.from(100),
    protein: Protein.from(11),
    carbohydrate: Carbohydrate.from(73),
    lipid: Lipid.from(4),
    calories: Calories.from(378)
  },
  {
    id: nanoid(),
    name: "Moutarde",
    quantity: G.from(100),
    protein: Protein.from(7),
    carbohydrate: Carbohydrate.from(5),
    lipid: Lipid.from(10),
    calories: Calories.from(144)
  },
  {
    id: nanoid(),
    name: "Oatmeal",
    quantity: G.from(100),
    protein: Protein.from(11),
    carbohydrate: Carbohydrate.from(62),
    lipid: Lipid.from(7),
    calories: Calories.from(354)
  },
  {
    id: nanoid(),
    name: "Œuf",
    quantity: G.from(100),
    protein: Protein.from(13),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(10),
    calories: Calories.from(140)
  },
  {
    id: nanoid(),
    name: "Oignons",
    quantity: G.from(100),
    protein: Protein.from(1),
    carbohydrate: Carbohydrate.from(9),
    lipid: Lipid.from(0),
    calories: Calories.from(43)
  },
  {
    id: nanoid(),
    name: "Pain libanais",
    quantity: G.from(100),
    protein: Protein.from(9),
    carbohydrate: Carbohydrate.from(63),
    lipid: Lipid.from(1),
    calories: Calories.from(300)
  },
  {
    id: nanoid(),
    name: "Pain pagnol bio",
    quantity: G.from(100),
    protein: Protein.from(10),
    carbohydrate: Carbohydrate.from(50),
    lipid: Lipid.from(1),
    calories: Calories.from(257)
  },
  {
    id: nanoid(),
    name: "Patate douce",
    quantity: G.from(100),
    protein: Protein.from(2),
    carbohydrate: Carbohydrate.from(21),
    lipid: Lipid.from(0),
    calories: Calories.from(91)
  },
  {
    id: nanoid(),
    name: "Pâtes crues",
    quantity: G.from(100),
    protein: Protein.from(13),
    carbohydrate: Carbohydrate.from(72),
    lipid: Lipid.from(2),
    calories: Calories.from(352)
  },
  {
    id: nanoid(),
    name: "Peanut butter",
    quantity: G.from(100),
    protein: Protein.from(26),
    carbohydrate: Carbohydrate.from(17),
    lipid: Lipid.from(49),
    calories: Calories.from(613)
  },
  {
    id: nanoid(),
    name: "Petits pois",
    quantity: G.from(100),
    protein: Protein.from(5),
    carbohydrate: Carbohydrate.from(11),
    lipid: Lipid.from(1),
    calories: Calories.from(70)
  },
  {
    id: nanoid(),
    name: "Pois chiche",
    quantity: G.from(100),
    protein: Protein.from(9),
    carbohydrate: Carbohydrate.from(27),
    lipid: Lipid.from(3),
    calories: Calories.from(163)
  },
  {
    id: nanoid(),
    name: "Pomme",
    quantity: G.from(100),
    protein: Protein.from(0),
    carbohydrate: Carbohydrate.from(12),
    lipid: Lipid.from(0),
    calories: Calories.from(52)
  },
  {
    id: nanoid(),
    name: "Pomme dt",
    quantity: G.from(100),
    protein: Protein.from(2),
    carbohydrate: Carbohydrate.from(18),
    lipid: Lipid.from(0),
    calories: Calories.from(81)
  },
  {
    id: nanoid(),
    name: "Poulet",
    quantity: G.from(100),
    protein: Protein.from(23),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(2),
    calories: Calories.from(106)
  },
  {
    id: nanoid(),
    name: "Raisins",
    quantity: G.from(100),
    protein: Protein.from(1),
    carbohydrate: Carbohydrate.from(15),
    lipid: Lipid.from(1),
    calories: Calories.from(69)
  },
  {
    id: nanoid(),
    name: "Rattatouille",
    quantity: G.from(100),
    protein: Protein.from(2),
    carbohydrate: Carbohydrate.from(5),
    lipid: Lipid.from(4),
    calories: Calories.from(59)
  },
  {
    id: nanoid(),
    name: "Riz cru",
    quantity: G.from(100),
    protein: Protein.from(8),
    carbohydrate: Carbohydrate.from(79),
    lipid: Lipid.from(1),
    calories: Calories.from(357)
  },
  {
    id: nanoid(),
    name: "Riz long grain",
    quantity: G.from(100),
    protein: Protein.from(5),
    carbohydrate: Carbohydrate.from(76),
    lipid: Lipid.from(1),
    calories: Calories.from(336)
  },
  {
    id: nanoid(),
    name: "Riz sauvage",
    quantity: G.from(100),
    protein: Protein.from(11),
    carbohydrate: Carbohydrate.from(69),
    lipid: Lipid.from(1),
    calories: Calories.from(344)
  },
  {
    id: nanoid(),
    name: "Riz sushi",
    quantity: G.from(100),
    protein: Protein.from(8),
    carbohydrate: Carbohydrate.from(77),
    lipid: Lipid.from(1),
    calories: Calories.from(349)
  },
  {
    id: nanoid(),
    name: "Salade verte",
    quantity: G.from(100),
    protein: Protein.from(1),
    carbohydrate: Carbohydrate.from(2),
    lipid: Lipid.from(0),
    calories: Calories.from(13)
  },
  {
    id: nanoid(),
    name: "Sauce à salade",
    quantity: ML.from(100),
    protein: Protein.from(0),
    carbohydrate: Carbohydrate.from(3),
    lipid: Lipid.from(65),
    calories: Calories.from(587)
  },
  {
    id: nanoid(),
    name: "Saumon fumé",
    quantity: G.from(100),
    protein: Protein.from(22),
    carbohydrate: Carbohydrate.from(1),
    lipid: Lipid.from(12),
    calories: Calories.from(199)
  },
  {
    id: nanoid(),
    name: "Semoule crue",
    quantity: G.from(100),
    protein: Protein.from(12),
    carbohydrate: Carbohydrate.from(74),
    lipid: Lipid.from(1),
    calories: Calories.from(353)
  },
  {
    id: nanoid(),
    name: "Serré maigre",
    quantity: G.from(100),
    protein: Protein.from(11),
    carbohydrate: Carbohydrate.from(3),
    lipid: Lipid.from(0),
    calories: Calories.from(58)
  },
  {
    id: nanoid(),
    name: "Sucre",
    quantity: G.from(100),
    protein: Protein.from(0),
    carbohydrate: Carbohydrate.from(100),
    lipid: Lipid.from(0),
    calories: Calories.from(400)
  },
  {
    id: nanoid(),
    name: "Sushi",
    quantity: G.from(100),
    protein: Protein.from(6),
    carbohydrate: Carbohydrate.from(33),
    lipid: Lipid.from(4),
    calories: Calories.from(190)
  },
  {
    id: nanoid(),
    name: "Thon a l'eau",
    quantity: G.from(100),
    protein: Protein.from(26),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(1),
    calories: Calories.from(109)
  },
  {
    id: nanoid(),
    name: "Tofu",
    quantity: G.from(100),
    protein: Protein.from(17),
    carbohydrate: Carbohydrate.from(2),
    lipid: Lipid.from(9),
    calories: Calories.from(157)
  },
  {
    id: nanoid(),
    name: "Tomate",
    quantity: G.from(100),
    protein: Protein.from(1),
    carbohydrate: Carbohydrate.from(5),
    lipid: Lipid.from(0),
    calories: Calories.from(21)
  },
  {
    id: nanoid(),
    name: "Tortillas (40g/pce)",
    quantity: G.from(100),
    protein: Protein.from(9),
    carbohydrate: Carbohydrate.from(53),
    lipid: Lipid.from(5),
    calories: Calories.from(297)
  },
  {
    id: nanoid(),
    name: "Viande séchée",
    quantity: G.from(100),
    protein: Protein.from(43),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(4),
    calories: Calories.from(204)
  },
  {
    id: nanoid(),
    name: "Vin blanc",
    quantity: ML.from(100),
    protein: Protein.from(0),
    carbohydrate: Carbohydrate.from(1),
    lipid: Lipid.from(0),
    calories: Calories.from(87)
  },
  {
    id: nanoid(),
    name: "Vin rouge",
    quantity: ML.from(100),
    protein: Protein.from(0),
    carbohydrate: Carbohydrate.from(0),
    lipid: Lipid.from(0),
    calories: Calories.from(90)
  },
  {
    id: nanoid(),
    name: "Whey prot",
    quantity: G.from(100),
    protein: Protein.from(76),
    carbohydrate: Carbohydrate.from(9),
    lipid: Lipid.from(6),
    calories: Calories.from(386)
  },
  {
    id: nanoid(),
    name: "Yogourth nature",
    quantity: G.from(100),
    protein: Protein.from(4),
    carbohydrate: Carbohydrate.from(5),
    lipid: Lipid.from(11),
    calories: Calories.from(127)
  }
]


