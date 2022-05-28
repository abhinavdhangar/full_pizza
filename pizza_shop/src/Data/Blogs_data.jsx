// import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import {faker} from '@faker-js/faker'
function generateUsers() {

    let users = []
  
    for (let id=1; id <=101; id++) {
    
      let name = faker.name.findName()
      let firstName = faker.name.firstName();
      let lastName = faker.name.lastName();
      let email = faker.internet.email();
      let image = faker.image.image();
      let para = faker.lorem.paragraph();
      let company = faker.company.companyName();
      let href = name.split(" ").join("_")
      let avatar = faker.image.avatar();
      let category_topic = ['popular','productivity','naughty','entertainment','setup','technology','spriritual','travel','family']
    let category =category_topic[Math.floor(Math.random()*(category_topic.length-1))]
      users.push({
          "id": id,
          "name":name,
          "href":href,
          "first_name": firstName,
          "last_name": lastName,
          "category":category,
          "image":image,
          "para":para,
          "company":company,
          "avatar":avatar,
       
      });
    }
  
    return { "data": users }
  }
  let callouts = generateUsers()
export default callouts