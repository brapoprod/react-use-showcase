import { NextApiRequest, NextApiResponse } from 'next';
import { vikingNames } from '../../../utils/sample-data';

export interface VikingParamsType {
    name: string;
    gender: 'male' | 'female';
}

const calculateVikingMatch = (
    initialName: string,
    vikingName: string
): number => {
    const lowerInitialName = initialName.toLowerCase();
    const lowerVikingName = vikingName.toLowerCase();

    const initialValue = lowerInitialName[0] === lowerVikingName[0] ? 2 : 0;

    return [...lowerVikingName].reduce((total, currentChar) => {
        if (lowerInitialName.includes(currentChar)) return total + 1;
        return total;
    }, initialValue);
};

const getVikingNames = (params: VikingParamsType) => {
    const { name, gender } = params;

    const filteredNamesByGender = vikingNames.filter(
        (vikingName) =>
            vikingName.gender === gender || vikingName.gender === 'uni'
    );
    const scoredNames = filteredNamesByGender.map((vikingName) => ({
        ...vikingName,
        score: calculateVikingMatch(name, vikingName.name),
    }));
    const highestScore = Math.max(...scoredNames.map((name) => name.score));

    if (highestScore !== 0) {
        const possibleVikingNames = scoredNames.filter(
            (name) => name.score === highestScore
        );

        return possibleVikingNames;
    }
    return [];
};

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const vikingParams: VikingParamsType = _req.body;

        if (!vikingParams) {
            throw new Error('Empty body');
        }

        const vikingNames = getVikingNames(vikingParams);

        res.status(200).json(vikingNames);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;
