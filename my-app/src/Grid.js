import './grid.css'
import Box from './Box'

function Grid(){
    
    return (
        <div className="grid">
        
            <div className="sect">
                <Box number="1"></Box>
                <Box number="4"></Box>
                <Box number="3"></Box>
            </div>
            <div className='sect'>
                <Box number="9"></Box>
                <Box number="2"></Box>
                <Box number="6"></Box>
            </div>
            <div className='sect'>
                <Box number="8"></Box>
                <Box number="5"></Box>
            </div>
        </div>
    );
}

export default Grid