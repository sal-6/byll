import styled from "styled-components/native"

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

// Specific fonts

const client = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`

const dateRange = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title}
`

const amount = (theme) => `
    font-family: ${theme.fonts.number};
    font-size: ${theme.fontSizes.h4};
    color: ${theme.colors.ui.success}
`

const variants = {
    body,
    label,
    caption,
    error,
    hint,
    dateRange,
    client,
    amount
};


// used as <Text variant={-variant-}>Hello World!</Text>
export const Text = styled.Text`
    ${({ theme }) => defaultTextStyles(theme)}
    ${({ variant, theme }) => variants[variant](theme)}
`

Text.defaultProps = {
    variant: "body",
};