import { useState } from 'preact/hooks'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Count: {count}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </Container>
  )
}
