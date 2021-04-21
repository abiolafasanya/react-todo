import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header>
            <h1 style={headerStyle}>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
  }

Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

  const headerStyle = {
      color: '#fff',
      backgroundColor: '#305DC0',
      textAlign: 'center',
      padding: '5px',
      margin: '0px'
  }

export default Header
