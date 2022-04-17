import React from 'react'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useAppSelector } from '../../redux/hooks'
import { setLocale, Locale } from '../../redux/slice/localeSlice'
import styles from './LocaleChooser.module.css'
import styled from '@emotion/styled'

const StyledSelect = styled(Select)({
  '&:before': {
    border: 'none',
  },
  '&:after': {
    border: 'none',
  },
  '&:not(.Mui-disabled):hover::before': {
    border: 'none',
  },
  color: 'white',
  width: 'fit-content',
  icon: {
    fill: 'white',
  },
})

const useStyles = makeStyles({
  select: {
    '&:before': {
      border: 'none',
    },
    '&:after': {
      border: 'none',
    },
    '&:not(.Mui-disabled):hover::before': {
      border: 'none',
    },
    color: 'white',
    width: 'fit-content',
  },
  icon: {
    fill: 'white',
  },
})

export default function LocalChooser() {
  const handleChange = (event: SelectChangeEvent) => {
    setLocale(event.target.value)
  }

  const locale = useAppSelector((state) => state.locale.current)

  const classes = useStyles()

  return (
    <div className={styles.main}>
      <FormControl variant="standard">
        <StyledSelect
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
          labelId="locale"
          id="locale"
          value={locale?.toString()}
          onChange={() => {
            console.log('')
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={Locale.FRA}>FRA</MenuItem>
          <MenuItem value={Locale.ESP}>ESP</MenuItem>
          <MenuItem value={Locale.GER}>GER</MenuItem>
          <MenuItem value={Locale.US}>US</MenuItem>
          <MenuItem value={Locale.ENG}>ENG</MenuItem>
        </StyledSelect>
      </FormControl>
    </div>
  )
}
