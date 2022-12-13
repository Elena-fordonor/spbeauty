import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 217px;
`;

const Input = styled.input`
    width: 217px;
    height: 34px;
    left: 8px;
    top: 16px;    
    border: solid #E2E8F0 1px;
    border-radius: 24px;
    background-color: #F8FAFC;
    color: #94A3B8;
    width: 100%;
    &:hover {
        background: rgba(226, 232, 240, 0,8);
    }
    &:focus {
        background: F8FAFC;
    }
`;

const SearchIconWrapper = styled.div`
    background-color: none;
    position: absolute;
    box-sizing:border-box;
    right: 8px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input className='pe-2' placeholder='Найти'/>
            <SearchIconWrapper className='p-2'>  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;