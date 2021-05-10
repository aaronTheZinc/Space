export interface Landpad {
    name:             string;
    fullName:         string;
    type:             string;
    locality:         string;
    region:           string;
    latitude:         number;
    longitude:        number;
    landingAttempts:  number;
    landingSuccesses: number;
    wikipedia:        string;
    details:          string;
    launches:         string[];
    status:           string;
    id:               string;
}
