import { dashboardMetaData } from '../Model/dashboardDetails';

export interface IDashboardServices {
  getMetaData(): dashboardMetaData[];
}
