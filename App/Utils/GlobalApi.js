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

const getBusinessListByCategory= async (sliderCategory) =>{
  const query =gql`
  query getBusinessList {
    businessLists(where: {sliderCategory: {name: "`+sliderCategory+`"}}) {
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

const createBooking = async (data)=>{
  const mutationQuery =gql`
  mutation createbooking {
    createBooking(
      data: {
        bookingStatus: Booked, 
        businessList: {connect: {id: "`+data.businessId+`"}}, 
        date: "`+data.date+`", 
        time: "`+data.time+`", 
        userEmail: "`+data.userEmail+`", 
        userName: "`+data.userName+`"
      }
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED)
  }
  `
  const result = await request(api_url, mutationQuery)
    return result;
}
const getUserBookings = async(userEmail)=>{
  const query = gql`
  query getUserBookings {
    bookings(orderBy: updatedAt_DESC, where: {userEmail:`+userEmail+`}) {
      userEmail
      userName
      time
      date
      bookingStatus
      id
      businessList {
        id
        images {
          url
        }
        name
        contactPerson
        address
        email
        about
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
    getBusinessList,
    getBusinessListByCategory,
    createBooking,
    getUserBookings
}