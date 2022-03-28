export interface NavigationItem<T, U = string, V = Function> {
    /**
     * Icon of item
     */
    icon?: T;
    /**
     * Name that will displayed
     */
    name: U;
    /**
     * TODO
     */
    onClick?: V;
}
