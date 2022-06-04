// import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import { faker } from '@faker-js/faker'
function generateProucts() {

    let products = []

    for (let id = 1; id <= 20; id++) {
        function randomIntFromInterval(min, max) { 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
        let name = faker.name.findName()
        let price = randomIntFromInterval(100, 1000)
        let rating = randomIntFromInterval(1, 5)
        let email = faker.internet.email();
        let image = faker.image.image();
        let para = faker.lorem.paragraph();
        let company = faker.company.companyName();
        let href = name.split(" ").join("_")
        let avatar = faker.image.avatar();
        let category_topic = ['popular', 'productivity', 'naughty', 'entertainment', 'setup', 'technology', 'spriritual', 'travel', 'family']
        let category = category_topic[Math.floor(Math.random() * (category_topic.length - 1))]
        products.push({
            "id": id,
            "name": name,
            "href": href,
            "price": price,
           "rating": rating,
           "email": email,
            "category": category,
            "image": image,
            "para": para,
            "company": company,
            "avatar": avatar,

        });
    }

    return { "data": products }
}
let callouts = generateProucts()
export default callouts