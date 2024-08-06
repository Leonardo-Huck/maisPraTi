import { useState } from "react";
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const QRCodeGenerator = () => {

    const [text, setText] = useState('')

    return (
        <Container>
            <Title>QR Code Generator</Title>
            <Input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            {text && (
                <QRContainer>
                    <QRCode value="text" size={256} />
                </QRContainer>
            )}
        </Container>
    )
}

export default QRCodeGenerator