import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      Home
      <button onClick={() => navigate('/1')}>Go to Single Product 1</button>
      <button onClick={() => navigate('/2')}>Go to Single Product 2</button>
      <button onClick={() => navigate('/3')}>Go to Single Product 3</button>
    </div>
  )
}

export default Home
