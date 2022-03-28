export interface NavigationItem<T, U = string, V = Function, W = string> {
    /**
     * Name that will displayed
     */
    name: U;
    /**
     * Icon of item
     */
    icon?: T;
    /**
     * TODO
     */
    onClick?: V;
    /**
     * Path of page
     */
    path?: W;
}
