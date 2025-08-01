import color from 'colors'
import server from './server'

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(color.blue.bold.italic(`Server is running on port ${port}`))
})
