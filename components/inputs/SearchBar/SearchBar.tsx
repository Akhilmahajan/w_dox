import React from 'react'
// import styles from './SearchBar.module.css'
import TuneIcon from '@mui/icons-material/Tune'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

interface ISearchBarProps {
  className?: string
  placeholder?: string
  style?: { [key: string]: string }
}

const SearchBar = ({ placeholder }: ISearchBarProps) => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        background: 'transparent',
        display: 'flex',
        margin: '10px 0',
        alignItems: 'center',
        boxShadow: 'none',
        backgroundColor: '#ffffff40',
        color: 'white',
        width: '100%'
      }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon sx={{ color: 'white' }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white' }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <TuneIcon sx={{ color: 'white' }} />
      </IconButton>
    </Paper>
  )
}

SearchBar.defaultProps = {
  style: {},
}

export default SearchBar
