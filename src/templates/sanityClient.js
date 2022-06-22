const sanityClient  = require('@sanity/client')
const client = sanityClient({
  projectId: 'qn3ed0he',
  dataset: 'production', 
  apiVersion: '2022-06-21',
  useCdn: false
})

export default client
