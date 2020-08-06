export const publish =
    [
        { "Parameter": "**/Action:**", "ShortForm": "**/a**", "Value": "Publish", "Description": "Specifiestheactiontobeperformed." },
        {
            "Parameter": "**/AccessToken:**",
            "Short Form": "**/at**",
            "Value": "{string}",
            "Description": "Specifies the token based authentication access token to use when connect to the target database."
        },
        {
            "Parameter": "**/AzureKeyVaultAuthMethod:**",
            "Short Form": "**/akv**",
            "Value": "{Interactive&#124;ClientIdSecret}",
            "Description": "Specifies what authentication method is used for accessing Azure KeyVault"
        },
        {
            "Parameter": "**/ClientId:**",
            "Short Form": "**/cid**",
            "Value": "{string}",
            "Description": "Specifies the Client ID to be used in authenticating against Azure KeyVault, when necessary"
        },
        {
            "Parameter": "**/DeployScriptPath:**",
            "Short Form": "**/dsp**",
            "Value": "{string}",
            "Description": "Specifies an optional file path to output the deployment script. For Azure deployments, if there are TSQL commands to create or modify the master database, a script will be written to the same path but with \"Filename_Master.sql\" as the output file name."
        },
        {
            "Parameter": "**/DeployReportPath:**",
            "Short Form": "**/drp**",
            "Value": "{string}",
            "Description": "Specifies an optional file path to output the deployment report xml file."
        },
        {
            "Parameter": "**/Diagnostics:**",
            "Short Form": "**/d**",
            "Value": "{True&#124;False}",
            "Description": "Specifies whether diagnostic logging is output to the console. Defaults to False."
        },
        {
            "Parameter": "**/DiagnosticsFile:**",
            "Short Form": "**/df**",
            "Value": "{string}",
            "Description": "Specifies a file to store diagnostic logs."
        },
        {
            "Parameter": "**/MaxParallelism:**",
            "Short Form": "**/mp**",
            "Value": "{int}",
            "Description": "Specifies the degree of parallelism for concurrent operations running against a database. The default value is 8."
        },
        {
            "Parameter": "**/OverwriteFiles:**",
            "Short Form": "**/of**",
            "Value": "{True&#124;False}",
            "Description": "Specifies if sqlpackage.exe should overwrite existing files. Specifying false causes sqlpackage.exe to abort action if an existing file is encountered. Default value is True."
        },
        {
            "Parameter": "**/Profile:**",
            "Short Form": "**/pr**",
            "Value": "{string}",
            "Description": "Specifies the file path to a DAC Publish Profile. The profile defines a collection of properties and variables to use when generating outputs."
        },
        {
            "Parameter": "**/Properties:**",
            "Short Form": "**/p**",
            "Value": "{PropertyName}={Value}",
            "Description": "Specifies a name value pair for an action-specific property;{PropertyName}={Value}. Refer to the help for a specific action to see that action's property names. Example: sqlpackage.exe /Action:Publish /?."
        },
        {
            "Parameter": "**/Quiet:**",
            "Short Form": "**/q**",
            "Value": "{True&#124;False}",
            "Description": "Specifies whether detailed feedback is suppressed. Defaults to False."
        },
        {
            "Parameter": "**/Secret:**",
            "Short Form": "**/secr**",
            "Value": "{string}",
            "Description": "Specifies the Client Secret to be used in authenticating against Azure KeyVault, when necessary"
        },
        {
            "Parameter": "**/SourceConnectionString:**",
            "Short Form": "**/scs**",
            "Value": "{string}",
            "Description": "Specifies a valid SQL Server/Azure connection string to the source database. If this parameter is specified, it shall be used exclusively of all other source parameters."
        },
        {
            "Parameter": "**/SourceDatabaseName:**",
            "Short Form": "**/sdn**",
            "Value": "{string}",
            "Description": "Defines the name of the source database."
        },
        {
            "Parameter": "**/SourceEncryptConnection:**",
            "Short Form": "**/sec**",
            "Value": "{True&#124;False}",
            "Description": "Specifies if SQL encryption should be used for the source database connection."
        },
        {
            "Parameter": "**/SourceFile:**",
            "Short Form": "**/sf**",
            "Value": "{string}",
            "Description": "Specifies a source file to be used as the source of action instead of a database. If this parameter is used, no other source parameter shall be valid."
        },
        {
            "Parameter": "**/SourcePassword:**",
            "Short Form": "**/sp**",
            "Value": "{string}",
            "Description": "For SQL Server Auth scenarios, defines the password to use to access the source database."
        },
        {
            "Parameter": "**/SourceServerName:**",
            "Short Form": "**/ssn**",
            "Value": "{string}",
            "Description": "Defines the name of the server hosting the source database."
        },
        {
            "Parameter": "**/SourceTimeout:**",
            "Short Form": "**/st**",
            "Value": "{int}",
            "Description": "Specifies the timeout for establishing a connection to the source database in seconds."
        },
        {
            "Parameter": "**/SourceTrustServerCertificate:**",
            "Short Form": "**/stsc**",
            "Value": "{True&#124;False}",
            "Description": "Specifies whether to use TLS to encrypt the source database connection and bypass walking the certificate chain to validate trust."
        },
        {
            "Parameter": "**/SourceUser:**",
            "Short Form": "**/su**",
            "Value": "{string}",
            "Description": "For SQL Server Auth scenarios, defines the SQL Server user to use to access the source database."
        },
        {
            "Parameter": "**/TargetConnectionString:**",
            "Short Form": "**/tcs**",
            "Value": "{string}",
            "Description": "Specifies a valid SQL Server/Azure connection string to the target database. If this parameter is specified, it shall be used exclusively of all other target parameters."
        },
        {
            "Parameter": "**/TargetDatabaseName:**",
            "Short Form": "**/tdn**",
            "Value": "{string}",
            "Description": "Specifies an override for the name of the database that is the target of sqlpackage.exe Action."
        },
        {
            "Parameter": "**/TargetEncryptConnection:**",
            "Short Form": "**/tec**",
            "Value": "{True&#124;False}",
            "Description": "Specifies if SQL encryption should be used for the target database connection."
        },
        {
            "Parameter": "**/TargetPassword:**",
            "Short Form": "**/tp**",
            "Value": "{string}",
            "Description": "For SQL Server Auth scenarios, defines the password to use to access the target database."
        },
        {
            "Parameter": "**/TargetServerName:**",
            "Short Form": "**/tsn**",
            "Value": "{string}",
            "Description": "Defines the name of the server hosting the target database."
        },
        {
            "Parameter": "**/TargetTimeout:**",
            "Short Form": "**/tt**",
            "Value": "{int}",
            "Description": "Specifies the timeout for establishing a connection to the target database in seconds. For Azure AD, it is recommended that this value be greater than or equal to 30 seconds."
        },
        {
            "Parameter": "**/TargetTrustServerCertificate:**",
            "Short Form": "**/ttsc**",
            "Value": "{True&#124;False}",
            "Description": "Specifies whether to use TLS to encrypt the target database connection and bypass walking the certificate chain to validate trust."
        },
        {
            "Parameter": "**/TargetUser:**",
            "Short Form": "**/tu**",
            "Value": "{string}",
            "Description": "For SQL Server Auth scenarios, defines the SQL Server user to use to access the target database."
        },
        {
            "Parameter": "**/TenantId:**",
            "Short Form": "**/tid**",
            "Value": "{string}",
            "Description": "Represents the Azure AD tenant ID or domain name. This option is required to support guest or imported Azure AD users as well as Microsoft accounts such as outlook.com, hotmail.com, or live.com. If this parameter is omitted, the default tenant ID for Azure AD will be used, assuming that the authenticated user is a native user for this AD. However, in this case any guest or imported users and/or Microsoft accounts hosted in this Azure AD are not supported and the operation will fail. <br/> For more information about Active Directory Universal Authentication, see [UniversalAuthenticationwithSQLDatabaseandSQLDataWarehouse(SSMSsupportforMFA)](https://docs.microsoft.com/azure/sql-database/sql-database-ssms-mfa-authentication)."
        },
        {
            "Parameter": "**/UniversalAuthentication:**",
            "Short Form": "**/ua**",
            "Value": "{True&#124;False}",
            "Description": "Specifies if Universal Authentication should be used. When set to True, the interactive authentication protocol is activated supporting MFA. This option can also be used for Azure AD authentication without MFA, using an interactive protocol requiring the user to enter their username and password or integrated authentication (Windows credentials). When /UniversalAuthentication is set to True, no Azure AD authentication can be specified in SourceConnectionString (/scs). When /UniversalAuthentication is set to False, Azure AD authentication must be specified in SourceConnectionString (/scs). <br/> For more information about Active Directory Universal Authentication, see [UniversalAuthenticationwithSQLDatabaseandSQLDataWarehouse(SSMSsupportforMFA)](https://docs.microsoft.com/azure/sql-database/sql-database-ssms-mfa-authentication)."
        },
        {
            "Parameter": "**/Variables:**",
            "Short Form": "**/v**",
            "Value": "{PropertyName}={Value}",
            "Description": "Specifies a name value pair for an action-specific variable;{VariableName}={Value}. The DACPAC file contains the list of valid SQLCMD variables. An error results if a value is not provided for every variable."
        }
    ]