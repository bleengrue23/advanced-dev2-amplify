export const getAllCategoriesWithProducts = /*GraphQL*/ `
    query getAllCategoriesWithProducts {
        listCategories {
            items {
              id
              Items {
                items {
                  id
                }
              }
              name
            }
          }
    }
`;
