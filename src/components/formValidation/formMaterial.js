import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormValidation() {
  const classes = useStyles();
  const [inputs, setInputs] = useState("")
  const [allowNumber, setAllowNumber] = useState(false)
  const [allowSpecial, setAllowSpecial] = useState(false)

  const handleSort = (data) => {
    let sortedData = data.split('').sort().join('')
    alert(sortedData)
  }
  const handleNumber = (data) => {
    let filterNumber = data.split('').filter(a => a >= 0 && a <= 9)
    alert(filterNumber)
  }
  const handleText = (data) => {
    let filterText = data.split('').filter(a => a >= "a" && a <= "z")
    alert(filterText)
  }
  const handleSpecial = (data) => {
    const regex = /[^\w\d\s]/g
    const filterSpecial = data.match(regex)
    alert(filterSpecial)
  }

  const handleTextField = (data) => {
    let lastEnterText = data.split('').pop()
    let regex = /[0-9]/g
    let regexSpecial = /[^A-Za-z0-9]/
    if (allowNumber === false && allowSpecial === false) {
      if (regex.test(lastEnterText) || regexSpecial.test(lastEnterText)) {
        setInputs(inputs)
      } else setInputs(data)
    } else

      if (allowNumber === true && allowSpecial === false) {
        if (regexSpecial.test(lastEnterText)) {
          setInputs(inputs)
        } else setInputs(data)
      } else

        if (allowNumber === false && allowSpecial === true) {
          if (regex.test(lastEnterText)) {
            setInputs(inputs)
          } else setInputs(data)
        }

        else setInputs(data)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="text"
            label="Insert soomething here"
            name="text"
            type="text"
            value={inputs}
            onChange={(event) => handleTextField(event.target.value)}
            autoFocus
          />
          <FormControlLabel
            control={<Checkbox value="number" color="primary" />}
            label="allow numbers"
            checked={allowNumber}
            onChange={(event) => setAllowNumber(event.target.checked)}
          />
          <FormControlLabel
            control={<Checkbox value="special" color="primary" />}
            label="allow specials"
            checked={allowSpecial}
            onChange={(event) => setAllowSpecial(event.target.checked)}
          />
          <Grid>
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSort(inputs)}
            >
              Sort tăng
            </Button>
          </Grid>

          <Grid>
            <Button
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => handleNumber(inputs)}
            >
              Lọc number
            </Button>
          </Grid>

          <Grid>
            <Button
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => handleText(inputs)}
            >
              Lọc text
            </Button>
          </Grid>

          <Grid>
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSpecial(inputs)}
            >
              Lọc special
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
