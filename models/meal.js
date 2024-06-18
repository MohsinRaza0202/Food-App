class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingrdients,
        step,
        isGlutenFree,
        isVegan,
        isVegetarin,
        isLoctoseFree
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingrdients = ingrdients;
        this.step = step;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarin = isVegetarin;
        this.isLoctoseFree = isLoctoseFree;
    }
}
export default Meal;