export const T = Object.freeze({
    PRE: Symbol('preposition'), //předložky
    NUM: Symbol('number'), //čísla
    FRAC: Symbol('fraction'), //zlomky
    HOUR: Symbol('hourFraction'), //zlomkové hodiny
    TIM: Symbol('time'), //časy
    DAY: Symbol('day'), //den v týdnu
    FDAY: Symbol('forcedDay'), //vnucený den
    MONTH: Symbol('month'), // měsíc
    COMP: Symbol('compound'), //složený symbol
    MOD: Symbol('modifier'), //modifikáor denní doby
})