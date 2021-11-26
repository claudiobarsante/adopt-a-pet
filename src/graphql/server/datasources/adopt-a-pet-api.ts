import { RESTDataSource } from 'apollo-datasource-rest';

class PetAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:60643/v1/adoption/';
  }

  getBreeds() {
    return this.get('breeds');
  }
}

export default PetAPI;
