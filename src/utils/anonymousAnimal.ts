export default function anonymousAnimal(){
    const animals = ['원숭이','코끼리','고양이','강아지',
    '앵무새','해파리','거북이','고라니','두더지','구렁이',
'독수리','얼룩말','호랑이','도마뱀','코브라','살모사','병아리'
,'오징어','고등어','송사리','메추리','오골계','도롱뇽']

    const randomAnimalName = animals[Math.floor(Math.random() * animals.length)];

    return randomAnimalName
}