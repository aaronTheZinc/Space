export interface Launchpad {
    name:            string;
    fullName:        string;
    locality:        string;
    region:          string;
    timezone:        string;
    latitude:        number;
    longitude:       number;
    launchAttempts:  number;
    launchSuccesses: number;
    rockets:         string[];
    launches:        string[];
    details:         string;
    status:          string;
    id:              string;
}
