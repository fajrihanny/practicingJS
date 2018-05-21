const contentful = require('contentful')
const client = contentful.createClient({
  space:'j7hhenda0gvc',
  accessToken:'5718a38b4a44be299eec9fcf4505f57e2b3607a2fcbaac4c37a6a884313a6527'
})
client.getEntry('3MADLKWfJuyy6CiKS6Wq26').
then((x)=>console.log(x)).
catch((y)=>console.log(y))
