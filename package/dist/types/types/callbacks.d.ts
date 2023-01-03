declare type Callback<T> = (event: T) => void;
export declare type EventCallback<E extends Event> = Callback<E>;
export declare type EventValueCallback<E extends Event, V> = (event: E, value: V) => void;
export {};
