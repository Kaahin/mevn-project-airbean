import {
  ActionContext,
  ActionTree,
  CommitOptions,
  createLogger,
  createStore,
  DispatchOptions,
  GetterTree,
  MutationTree,
  Store as VuexStore,
} from "vuex";

//declare state
export type State = { amount: number };
//set state
const state: State = { amount: 0 };
// mutation and action enums

export enum MutationTypes {
  INC_AMOUNT = "SET_AMOUNT",
}

export enum ActionTypes {
  INC_AMOUNT = "SET_AMOUNT",
}

// Mutation Types
export type Mutations<S = State> = {
  [MutationTypes.INC_AMOUNT](state: S, payload: number): void;
};

// define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INC_AMOUNT](state: State, payload: number) {
    state.amount += payload;
  },
};

// actions
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.INC_AMOUNT](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INC_AMOUNT]({ commit }, payload: number) {
    commit(MutationTypes.INC_AMOUNT, payload);
  },
};

// Getters types
export type Getters = {
  addAmount(state: State): number;
};

export const getters: GetterTree<State, State> & Getters = {
  addAmount: (state) => {
    return state.amount;
  },
};

//setup store type
export type Store = Omit<
  VuexStore<State>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger()],
});

export function useStore(): Store {
  return store as Store;
}

