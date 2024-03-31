export const getUserInitials = (fullName: string) => {
    const splitFullName = fullName.split(' ')
    const nameFirstSymbol = splitFullName.at(0).at(0)
    const surnameFirstSymbol = splitFullName.at(1).at(0)

    return `${nameFirstSymbol}${surnameFirstSymbol}`
}
