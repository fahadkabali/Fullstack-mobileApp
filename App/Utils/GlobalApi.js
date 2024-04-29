import {request, gql} from 'graphql-request'

const api_url = process.env.MASTER_URL

const getSlider = async () =>{
    const query =gql`
    query GetSlide{
        sliders {
          id
          name
          image {
            url
          }
        }
      }
    `
    const result = await request(api_url, query)
    return result;
}
const getCategory = async () =>{
    const query = gql`
    query GetCategory {
        sliderCategories {
          id
          name
          icon {
            url
          }
        }
      }
      
    `
    const result = await request(api_url, query)
    return result;
}

const getBusinessList = async () =>{
    const query = gql`
    query getBusinessList {
        businessLists {
          id
          email
          name
          contactPerson
          sliderCategory {
            name
          }
          address
          about
          images {
            url
          }
        }
      }
    `
    const result = await request(api_url, query)
    return result;
}
export default{
    getSlider, 
    getCategory,
    getBusinessList
}