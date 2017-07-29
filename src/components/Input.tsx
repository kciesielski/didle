import * as React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    border-color: rgb(183, 183, 183);
    border-width: 0.992647px;
    box-sizing: border-box;
    color: rgb(85, 85, 85);
    font-size: 13px;
    height: 30px;
    line-height: 15px;
    width: 195px;
    padding-bottom: 4px;
    padding-left: 12px;
    padding-right: 12px;
    margin-right: 10px;
    padding-top: 4px;  
    text-align: start;
    width: 310px;
` // patrz komentarz do styli w Button.tsx :)

export const ShortInput = Input.extend`
    width: 155px;
`

export default Input

// dopoki nie ma w uzyciu skladni jsx, nie ma potrzeby dla rozszerzenia .tsx (wystarczy .ts)
