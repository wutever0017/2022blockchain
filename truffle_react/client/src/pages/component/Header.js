import React from 'react';
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { colors, Stack } from '@mui/material';
import { Link } from 'react-router-dom'


const Header = (props) => {
  const [value, setValue] = React.useState('upload');

  const goToUpload = () => {
    console.log('to uploadPage');
    // window.location.href = "../";
  }
  const goToAuthor = () => {
    console.log('to authorPage');
    // window.location.href = "../author";
  }
  const goToMsg = () => {
    console.log('to MsgPage');
    // window.location.href = "../msg_home";
  }


  return (
    <header className='header'>

      <h3 style={{ color: 'white' }}><b>個人基因醫療隱私區塊鏈</b></h3>
      <h1 style={{ color: 'white' }}>{props.title}</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <div>
          {/* <Button style={{ color: 'white' }} onClick={goToUpload}><b>基因上傳</b></Button>
          <Button style={{ color: 'white' }} onClick={goToAuthor}><b>取得基因資料</b></Button>
          <Button style={{ color: 'white' }} onClick={goToMsg}><b>傳輸公私鑰</b></Button> */}
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }} onClick={goToUpload}><b>基因上傳</b></Button>
          </Link>

          <Link to={'/author'} style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }} onClick={goToAuthor}><b>取得基因資料</b></Button>
          </Link>

          <Link to={'/msg_home'} style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }} onClick={goToMsg}><b>傳輸公私鑰</b></Button>
          </Link>

        </div>
      </Box>


    </header >
  )
}

Header.defaultProps = {
  title: '',
}

Header.protoType = {
  title: PropTypes.string.isRequired,
}
export default Header