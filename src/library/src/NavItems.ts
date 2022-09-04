export interface NavigationItem<T, U = string, V = any, W = string> {
    /**
     * Name that will display
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
