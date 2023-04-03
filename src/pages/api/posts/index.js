import data from '../data'


// default file for posts;
export default function post(req, res) {
  const {Posts} = data

  if(Posts) return res.status(200).json(Posts)
  return res.status(404).json({error:"Data not found"})

  
}

