
export const maleNames = [
    "Antonio", "Manuel", "Jose", "Francisco", "David", "Juan", "Jose Antonio", "Javier", "Jose Luis", "Daniel",
    "Francisco Javier", "Jesus", "Carlos", "Alejandro", "Miguel", "Jose Manuel", "Rafael", "Pedro", "Angel", "Miguel Angel",
    "Jose Maria", "Fernando", "Pablo", "Luis", "Sergio", "Jorge", "Alberto", "Juan Carlos", "Juan Jose", "Diego",
    "Alvaro", "Adrian", "Juan Antonio", "Enrique", "Raul", "Ramon", "Vicente", "Ivan", "Ruben", "Andres",
    "Oscar", "Joaquin", "Santiago", "Eduardo", "Victor", "Roberto", "Jaime", "Francisco Jose", "Ignacio", "Mario",
    "Alfonso", "Salvador", "Ricardo", "Marcos", "Emilio", "Julian", "Julio", "Tomas", "Agustin", "Guillermo"
];

export const femaleNames = [
    "Maria", "Carmen", "Ana", "Isabel", "Dolores", "Pilar", "Teresa", "Rosa", "Josefa", "Cristina",
    "Maria Carmen", "Maria Teresa", "Ana Maria", "Elena", "Laura", "Francisca", "Antonia", "Marta", "Silvia", "Montserrat",
    "Lucia", "Mercedes", "Raquel", "Manuela", "Sara", "Paula", "Juana", "Beatriz", "Encarnacion", "Nuria",
    "Julia", "Rosario", "Susana", "Rocio", "Monica", "Alba", "Irene", "Lidia", "Celia", "Patricia",
    "Sofia", "Andrea", "Marina", "Angela", "Claudia", "Natalia", "Veronica", "Gema", "Daniela", "Eva",
    "Amparo", "Concepcion", "Victoria", "Lorena", "Ana Isabel", "Maria Jose", "Ines", "Miriam", "Esther", "Nerea"
];

export const surnames = [
    "Garcia", "Gonzalez", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Gomez", "Martin",
    "Jimenez", "Ruiz", "Hernandez", "Diaz", "Moreno", "Muñoz", "Alvarez", "Romero", "Alonso", "Gutierrez",
    "Navarro", "Torres", "Dominguez", "Vazquez", "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Molina",
    "Morales", "Suarez", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marin", "Sanz", "Nuñez",
    "Iglesias", "Medina", "Garrido", "Cortes", "Castillo", "Santos", "Lozano", "Guerrero", "Cano", "Prieto",
    "Mendez", "Cruz", "Calvo", "Gallego", "Vidal", "Leon", "Marquez", "Herrera", "Peña", "Flores",
    "Cabrera", "Campos", "Vega", "Fuentes", "Carrasco", "Diez", "Caballero", "Reyes", "Nieto", "Aguilar",
    "Pascual", "Santana", "Herrero", "Lorenzo", "Montero", "Hidalgo", "Gimenez", "Ibañez", "Ferrer", "Duran",
    "Santiago", "Benitez", "Mora", "Vicente", "Vargas", "Arias", "Carmona", "Crespo", "Roman", "Pastor",
    "Soto", "Saez", "Velasco", "Moya", "Soler", "Parra", "Esteban", "Bravo", "Gallardo", "Rojas"
];

export const generateRandomPatient = () => {
    // 1. Determine Gender
    const isMale = Math.random() > 0.5;
    const sex = isMale ? "H" : "M";

    // 2. Select Name based on Gender
    const nameList = isMale ? maleNames : femaleNames;
    const firstName = nameList[Math.floor(Math.random() * nameList.length)];

    // 3. Select unique Surnames
    const surname1 = surnames[Math.floor(Math.random() * surnames.length)];
    let surname2 = surnames[Math.floor(Math.random() * surnames.length)];
    // Ensure surnames are different (optional but realistic)
    while (surname2 === surname1) {
        surname2 = surnames[Math.floor(Math.random() * surnames.length)];
    }

    // 4. Generate Random NHC
    const nhc = Math.floor(100000 + Math.random() * 900000);

    // 5. Generate Random Date of Birth (Age ~18 to 90)
    // Random year between 1935 and 2005
    const year = 1935 + Math.floor(Math.random() * 70);
    // Random month 1-12
    const month = Math.floor(Math.random() * 12) + 1;
    // Random day 1-28 (simple logic to avoid invalid dates)
    const day = Math.floor(Math.random() * 28) + 1;

    return {
        firstName: firstName,
        surname1: surname1,
        surname2: surname2,
        sex: sex,
        nhc: nhc,
        dobDay: String(day).padStart(2, '0'),
        dobMonth: String(month).padStart(2, '0'),
        dobYear: String(year)
    };
};
