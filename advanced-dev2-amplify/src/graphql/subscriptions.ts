/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onCreateCategory(filter: $filter, owner: $owner) {
    id
    name
    Items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onUpdateCategory(filter: $filter, owner: $owner) {
    id
    name
    Items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onDeleteCategory(filter: $filter, owner: $owner) {
    id
    name
    Items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onCreateProduct(filter: $filter, owner: $owner) {
    id
    name
    description
    price
    image
    categoryID
    carts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onUpdateProduct(filter: $filter, owner: $owner) {
    id
    name
    description
    price
    image
    categoryID
    carts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onDeleteProduct(filter: $filter, owner: $owner) {
    id
    name
    description
    price
    image
    categoryID
    carts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateCart = /* GraphQL */ `subscription OnCreateCart(
  $filter: ModelSubscriptionCartFilterInput
  $owner: String
) {
  onCreateCart(filter: $filter, owner: $owner) {
    id
    items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCartSubscriptionVariables,
  APITypes.OnCreateCartSubscription
>;
export const onUpdateCart = /* GraphQL */ `subscription OnUpdateCart(
  $filter: ModelSubscriptionCartFilterInput
  $owner: String
) {
  onUpdateCart(filter: $filter, owner: $owner) {
    id
    items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCartSubscriptionVariables,
  APITypes.OnUpdateCartSubscription
>;
export const onDeleteCart = /* GraphQL */ `subscription OnDeleteCart(
  $filter: ModelSubscriptionCartFilterInput
  $owner: String
) {
  onDeleteCart(filter: $filter, owner: $owner) {
    id
    items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCartSubscriptionVariables,
  APITypes.OnDeleteCartSubscription
>;
export const onCreateCartProduct = /* GraphQL */ `subscription OnCreateCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
  $owner: String
) {
  onCreateCartProduct(filter: $filter, owner: $owner) {
    id
    productId
    cartId
    product {
      id
      name
      description
      price
      image
      categoryID
      createdAt
      updatedAt
      owner
      __typename
    }
    cart {
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCartProductSubscriptionVariables,
  APITypes.OnCreateCartProductSubscription
>;
export const onUpdateCartProduct = /* GraphQL */ `subscription OnUpdateCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
  $owner: String
) {
  onUpdateCartProduct(filter: $filter, owner: $owner) {
    id
    productId
    cartId
    product {
      id
      name
      description
      price
      image
      categoryID
      createdAt
      updatedAt
      owner
      __typename
    }
    cart {
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCartProductSubscriptionVariables,
  APITypes.OnUpdateCartProductSubscription
>;
export const onDeleteCartProduct = /* GraphQL */ `subscription OnDeleteCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
  $owner: String
) {
  onDeleteCartProduct(filter: $filter, owner: $owner) {
    id
    productId
    cartId
    product {
      id
      name
      description
      price
      image
      categoryID
      createdAt
      updatedAt
      owner
      __typename
    }
    cart {
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCartProductSubscriptionVariables,
  APITypes.OnDeleteCartProductSubscription
>;
